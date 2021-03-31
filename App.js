import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  // return (<MainPage/>);
  return (<AboutPage/>);
}


const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
});