import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Location from "expo-location";
import axios from "axios"
import Loading from '../Loading';
import Sun from "../assets/icon/sun.png";
import Rainy from "../assets/icon/rainy.png";
import Clouds from "../assets/icon/cloud.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function OpenWeather({navigation,route}) {
  console.disableYellowBox = true;
  const [state, setState] = useState([])
  const [ready, setReady] = useState(true)
  let weatherIcons = ['Sun','Rainy','Clouds','Wind','Mist','Clear']
  let weatherIcon = 'Clouds'
  
  // const [cateState, setCateState] = useState([])
  //날씨 데이터 상태관리 상태 생성!
  const [weather, setWeather] = useState({
    temp : 0,
    condition : '',
    country : ''

  })


  const position = []

  // useEffect : 화면이 그려진뒤 가장 먼저 실행되어야 할 코드 작성
  useEffect(()=>{
	   
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{    
      navigation.setOptions({
        title:' OpenWeather API 사용'
    })      
        getLocation()
        setReady(false)
    },1000)

  },[])

  const getLocation = async () => {
    //수많은 로직중에 에러가 발생하면
    //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
    console.log('getLocation start ')
    try {      
      console.log('================================')
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestPermissionsAsync();      
      console.log('requestPermissionsAsync 호출 ')
      const locationData= await Location.getCurrentPositionAsync();
      // console.log('locationData = ' + locationData)
      // console.log('getCurrentPositionAsync 호출 ')
      console.log('latitude ===' + locationData['coords']['latitude'])
      console.log('longitude ===' + locationData['coords']['longitude'])
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      console.log('result' + result)
      position[0] = latitude
      position[1] = longitude

      // temp = result.data.main.temp; 
      // condition = result.data.weather[0].main
      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main
      const country = result.data.sys.country

      console.log('temp = ' + temp)
      console.log('condition = ' + condition)
      console.log('country = ' + country)
      weatherIcon = 'Clouds'
      console.log('weatherIcon = ' + weatherIcon)     

      weatherIcons.map((value,i)=> {
        // console.log('value = ' + value)
        //weatherIcon = require('../assets/icon/Clear.png')
        // weatherIcon = 'Clouds'
        // console.log('weatherIcon = ' + weatherIcon)     

        if(value == condition) {
          console.log('I value = ' + value)
          // weatherIcon = require("../assets/icon/" + condition + ".png");
          // weatherIcon = require('../assets/icon/Clear.png')
          // console.log('weatherIcon = ' + weatherIcon)          
        }
      })

      // https://velog.io/@leeeunbin/TIL-React-Native-%EB%82%A0%EC%94%A8%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0

      setWeather({
        temp, condition, country
      })

    } catch (error) {
      //혹시나 위치를 못가져올 경우를 대비해서, 안내를 준비합니다
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }

  return ready ? <Loading/> :  (
  // return (
   
    <View style={styles.container}>
       {/* <StatusBar style="black" /> */}
      <Text> https://openweathermap.org/current </Text>
      <Text> 온도 {weather.temp} </Text>
      <Text> 날씨 {weather.condition} </Text>
      <Image  style={styles.weatherIcon} source={{weatherIcon}}/>
      <Text> 국가 {weather.country} </Text>
      {/* <StatusBar style="auto" /> */}      
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
  weatherIcon: {
    //컨텐츠의 넓이 값
    width: 50,
    //컨텐츠의 높이 값
    height: 50,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },  
});

