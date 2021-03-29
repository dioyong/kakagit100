import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  // console.disableYellowBox = true;

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 1. 영역을 충분히 갖는 텍스트</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 영역을 갖는 텍스트</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 2. 영역을 충분히 갖는 텍스트</Text>
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 3. 영역을 충분히 갖는 텍스트</Text>
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 4. 영역을 충분히 갖는 텍스트</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 5. 영역을 충분히 갖는 텍스트</Text>
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 6. 영역을 충분히 갖는 텍스트</Text>
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 7. 영역을 충분히 갖는 텍스트</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 8. 영역을 충분히 갖는 텍스트</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}> 9. 영역을 충분히 갖는 텍스트</Text>
      </View>

     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: 'center'
  },
});
