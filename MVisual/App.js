import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Router from './src/navigation/Router';

import Amplify from "aws-amplify"
import config from "./aws-exports"

Amplify.configure(config)


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <Router />
    </>
  );
};

export default App;
