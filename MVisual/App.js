import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Router from './src/navigation/Router';
import MyFilesScreen from './src/screens/MyFiles/MyFiles';
import PatientsListScreen from './src/screens/PatientsList/PatientsList';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <Router />
    </>
  );
};

export default App;
