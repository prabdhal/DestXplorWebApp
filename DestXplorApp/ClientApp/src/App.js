import React, { Component } from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations';
import MoreInfo from './components/Destinations/MoreInfo';
import Contact from './components/Contact/Contact';
import AdminInbox from './components/Contact/AdminInbox';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/destinations' component={Destinations} />
        <Route path='/contact' component={Contact} />
        <Route path='/destinations/more-info' component={MoreInfo} />
        <Route path='/admin-inbox' component={AdminInbox} />
      </Layout>
    );
  }
}
