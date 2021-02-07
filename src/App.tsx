import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './processes/Home';
import { Biography } from './processes/Biography';
import { Products } from './processes/Products';
import { SignUp } from './processes/SignUp';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <Router> {/* contains all our routes, pages ou paths */}
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} /> {/* this is the home component */}
        <Route path='/Biography' exact component={Biography} />
        <Route path='/Products' exact component={Products} />
        <Route path='/SignUp' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
