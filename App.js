import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { RootNavigator } from './src/navigation/MainNavigator';
import {Provider as PaperProvider} from "react-native-paper"; 

const App = () => {

  return (
    <PaperProvider>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />    
    </PaperProvider>
  );
};


export default App;
