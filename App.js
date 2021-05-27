import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component{
  render(){
    return(
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
    )
  }
}
