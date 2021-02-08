import React from 'react';

import { Biography } from './processes/biography';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './processes/home';
import { Navbar } from './components/navbar';
import { Products } from './processes/products';
import { SignUp } from './processes/sign-up';
import ScrollToTop from './components/shared/scroll-to-top';

import './App.css';

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
