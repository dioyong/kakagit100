import  { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
import axios from "axios"
import { StatusBar } from 'expo-status-bar';

export default function App() {
  console.disableYellowBox = true;
  const [state, setState] = useState([])
  const [ready, setReady] = useState(true)
  const [cateState, setCateState] = useState([])
  //날씨 데이터 상태관리 상태 생성!
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  })

  useEffect(()=>{
	   
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{    
        getLocation()
        // setReady(false)
    },1000)

  },[])

  const getLocation = async () => {
    //수많은 로직중에 에러가 발생하면
    //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
    console.log('getLocation start ')
    try {
      console.log('getLocation try start ')
      console.log('================================')
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestPermissionsAsync();
      // await Location.LocationPermissionResponse();
      // await Location.requestForegroundPermissionsAsync
      console.log('requestPermissionsAsync 호출 ')
      const locationData= await Location.getCurrentPositionAsync();
      console.log('getCurrentPositionAsync 호출 ')
      console.log('latitude ===' + locationData['coords']['latitude'])
      console.log('longitude ===' + locationData['coords']['longitude'])
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      console.log('result' + result)

      temp = result.data.main.temp; 
      condition = result.data.weather[0].main

      console.log(temp)
      console.log(condition)

    } catch (error) {
      //혹시나 위치를 못가져올 경우를 대비해서, 안내를 준비합니다
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }

  return (
   
    <View style={styles.container}>
       <StatusBar style="black" />
      <Text>{temp}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
