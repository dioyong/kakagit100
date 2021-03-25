import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <View style={styles.subC1}></View>
      <View style={styles.subC2}></View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  subC1: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  subC2: {
    flex: 1,
    backgroundColor: 'green',
  },
});
