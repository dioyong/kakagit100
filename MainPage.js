import React, { useEffect, useState } from 'react'
import main from '../assets/main.png'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import data from '../data.json'
import Card from '../Components/Card';
import Loading from '../Components/Loading'
import { StatusBar } from 'expo-status-bar'

export default function MainPage() {

  console.disableYellowBox = true;

  const [state, setState] = useState([])
  const [ready, setReady] = useState(true)
  const [cateState, setCateState] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      let tip = data.tip;
      setState(tip)
      setCateState(tip)
      setReady(false)
    },1000)    
  },[])

  const category = (cate) => {
    if(cate =="전체보기") {
      setCateState(state)
    }else{
      setCateState(state.filter((d)=>{
        return d.category == cate
      }))
    }
  }

  let todayWeather = 10 + 17;
  let todayCondition = '흐림'

  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="black" />
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + 'C' +  todayCondition} </Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={'white'}>

        <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category("전체보기")}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{category("생활")}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={() => { category("재테크") }}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={() => { category("반려견") }}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={() => { navigation.navigate("LikePage") }}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
        {
          cateState.map((content,i)=>{
            return(<Card content={content} key={i}/>)
          })
        }
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  //카드 짝수 홀수에 따른 스타일 적용
  cardEven:{
    flex:1,
    flexDirection:"row",
    margin:10,
    backgroundColor:"#FFFED7",
    borderRadius:20,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },
    cardOdd:{
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },  
  weather: {
    alignSelf:"flex-end",
    paddingRight:20
  },
  title: {
    //폰트 사이즈
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:50,
	    //왼쪽 공간으로 부터 이격'
    marginLeft:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  middleContainer:{
    marginTop: 20,
    marginLeft: 10,
    height:60
  },
  middleButtonAll: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },  
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },  
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  }


});