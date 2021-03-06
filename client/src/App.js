import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from './utils/auth';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Customer from './pages/Customer';
import Ac from './pages/Ac';
import Addac from './pages/Addac';
import Report from './pages/Report';
import Addreport from './pages/Addreport';
import Search from './pages/Search';
import Payment from './pages/Payment';

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
      <div >
        <Header />
        <div className='container'>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          
          {Auth.loggedIn() ? (
            <Switch>
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/search" component={Search}  />
              <Route exact path="/customer/:id" component={Customer} />
              <Route exact path="/ac/:id" component={Ac} />
              <Route exact path="/customer/:id/addac" component={Addac} />
              <Route exact path="/report/:id" component={Report} />
              <Route exact path="/ac/:id/addreport" component={Addreport} />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            <>
              {/* need to redirect to login */}
              <Redirect to="/login"/>
            </>
          )}
          </Switch>
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
