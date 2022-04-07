//Done

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Report from "./components/Report"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Report' component={Report} />
        <Route path='/Signin' component={Signin} />
        <Route path='/Signup' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;