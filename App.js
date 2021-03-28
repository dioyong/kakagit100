import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';
import favicon from './assets/favicon.png'
export default function App() {
  const custAlert = () => {
    Alert.alert('Jsx 밖에서 함수 구현 기능 ')
  }

  const custAlert3 = () => {
    Alert.alert('Touch able Opacity 에도 onPress 속성이 있습니다. ')
  }

  return (

          <View style={styles.container}>
            <Image 
              // source={favicon}
              // resizeMode={'repeat'}
              source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}              
              resizeMode={'cover'}
              style={styles.imageStyle}
            />
          </View>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignContent:"center"
    },
  textContainer: {
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: "center"
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});