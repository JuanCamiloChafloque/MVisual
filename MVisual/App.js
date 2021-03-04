import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Router from './src/navigation/Router';
import CanvaTest from './src/screens/CanvaTest';

const App: () => React$Node = () => {
  return (
    <>
      <CanvaTest/>
    </>
  );
};

export default App;
