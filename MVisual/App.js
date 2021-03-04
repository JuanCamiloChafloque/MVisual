import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Router from './src/navigation/Router';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <Router />
    </>
  );
};

export default App;
