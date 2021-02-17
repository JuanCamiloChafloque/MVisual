import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MyFilesScreen from './src/screens/MyFiles/MyFiles';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <SafeAreaView>
        <MyFilesScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
