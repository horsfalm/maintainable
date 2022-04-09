import React from 'react';

import './App.css';
import Header from './components/Header'
import Logintech from './components/Logintech'
import Loginemployee from './components/Loginemployee'
import Home from './components/Home';
import Employeedashboard from './components/Employeedashboard';
import Techdashbord from './components/Techdashbord';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     
     <Router>
     <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/logintech" element={<Logintech />}/>
        <Route path="/loginemployee" element={<Loginemployee />}/>
        <Route path="/employeedashboard" element={<Employeedashboard />}/>
        <Route path="/techdashbord" element={<Techdashbord />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
    </ApolloProvider>
   
    
  );
}


export default App;
