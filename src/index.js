
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app"
import  'firebase/firestore'
import   "firebase/auth"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

// import SignupComponent from './views/examples/signup';
import rootReducer from './reducers/rootReducer'
// import Index from './views/Index'
import { Provider } from 'react-redux'
import  thunk from  'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase }   from 'react-redux-firebase'
import fbConfig from './config/fbConfig.js'

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import authReducer  from 'reducers/authReducers.jsx';
import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Index from "views/index.jsx"

// const store = createStore(rootReducer, authReducer)
// import { rootReducer } from 'store/rootReducer.jsx';
// const store = createStore(rootReducer);
// const store = createStore(authReducer);



const store  = createStore(rootReducer, 
  compose( 
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
 )
  );
  console.log(store);

var firebaseConfig = {
  apiKey: "AIzaSyCAXAi2Zgk8VTO4w-Q3q9lrJGvFBdmm-fk",
  authDomain: "brand-ambassador-699be.firebaseapp.com",
  databaseURL: "https://brand-ambassador-699be.firebaseio.com",
  projectId: "brand-ambassador-699be",
  storageBucket: "brand-ambassador-699be.appspot.com",
  messagingSenderId: "495224173820",
  appId: "1:495224173820:web:01cf424422e3fe2e1c5379",
  measurementId: "G-4YLX5R8RCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;

ReactDOM.render(


    <Provider store={store}>
        <Index />
     </Provider>
    ,


  <BrowserRouter > 
    <Switch >
      
      <Route path="/craybid"  render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      {/* <Route path='/signup' component={SignupComponent}></Route> */}

      <Redirect from="/" to="/auth/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

