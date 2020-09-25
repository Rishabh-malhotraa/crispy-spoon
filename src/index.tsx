import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import store from 'redux/store';

/**
 * everything inside the "root" DOM node will be managed by React DOM.
 *
 * The folder structure for the project is following
 *
 ** /App.jsx --> This file is where React Router is setup for the project, only top level pages are setup in the App.jsx file the subsequent sub-pages
 * for a given page(eg-> KPI sub-page for ModelSetup page ) is configured in its corresponding file in pages folder
 *
 ** /pages --> This folder contains all the first level pages for the project {eg: www.localhost.com:3000/{first_level}/{second_level}.. }
 *
 ** /Data --> This folder contains files which has specific information according to which the components are rendered {eg: model information for KPI pages}
 *
 ** /redux --> this folder is used to setup up redux  a package which helps us manage global state.
 * state is restricted to page, when the page is rerendered the state of that page is lost, but if we want to persist some state which would be used
 * in different pages we create a global store which could be used thoroughout the application
 *
 ** /components --> this folder contains all the low level implementation & UI logic of the app {eg: palcement of a div, its interaction on click, displaying of retreived data}
 * components has a subfolder structure containing
 *
 ** components/Helper --> commmon componets used throught out the app, {eg dropdown-menu,heading etc..}
 *
 ** components/Home --> compenets that are rendered for ever page in the app {the NavBar and the Tabs }
 *
 ** components/{<pageName>Page} --> this contains list of all components used for a {first-level} page, {eg page/QuantitativeValidation file
 * containes components imported from the components/QuantitativeValidationPage/{components} }
 *
 ** utils -> this folder contains a list of utility function used throughout the app
 *
 * NOTE: index.jsx is the entry point for every folder {example: import Stepper from 'components/ModelValidationPage/Stepper' references the index file in that folder }
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
