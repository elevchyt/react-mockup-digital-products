import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import WhatsNew from './components/WhatsNew';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode> 
    <Router>
      <Header />
      <Switch>
        <Home path="/" exact component={Home} />
        <Products path="/products" component={Products} />
        <WhatsNew path="/whatsnew" component={WhatsNew} />
        <Contact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);