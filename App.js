import React ,{useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { getNotes } from './src/apiFunctions';

const App = () => {

  useEffect(() => {
    getNotes().then((res) => {
      console.log("Notes Response :- ",res.data);
    },(err) => {
      console.log("Notes Response Error :- ",err)
    })
  },[])


  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text>App Screen</Text>
    </SafeAreaView>
  );
};


export default App;
