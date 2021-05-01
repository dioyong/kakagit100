import React from 'react';
// import OpenWeather from './pages/OpenWeather';
// import PublicWeather from './pages/PublicWeather';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer, navigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';


export default function App() {

  console.disableYellowBox = true;

  return ( 
    <NavigationContainer> 
      <StatusBar style='black' />
      <StackNavigator/>
    </NavigationContainer>
  // <OpenWeather/> 
  
  );
}