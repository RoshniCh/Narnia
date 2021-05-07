import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { AddAnimal } from './Pages/AddAnimal/AddAnimal';
import { AnimalType } from './Pages/AnimalType/AnimalType';
import { SearchAnimal } from './Pages/SearchAnimal/SearchAnimal';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/AddAnimal' component={AddAnimal} />
        <Route path='/AnimalType' component={AnimalType} />
        <Route path='/SearchAnimal' component={SearchAnimal} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
