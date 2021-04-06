import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
// import MainPage from './pages/MainPage'
// import AboutPage from './pages/AboutPage'
// import DetailPage from './pages/DetailPage'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'

export default function App() {
  return (
  // return (<MainPage/>);
  // return (<AboutPage/>);
  // return (<DetailPage/>);
  <NavigationContainer>
    <StatusBar style='black'/>
    <StackNavigator/>
  </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
});