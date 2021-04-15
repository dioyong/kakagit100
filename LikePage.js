import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Card from '../Components/Card';
import LikeCard from '../Components/LikeCard';
import Loading from '../Components/Loading'
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';
// 체크리스트 추가 

export default function LikePage({navigation, route}) {

  const [tip, setTip] = useState([])
  const [ready,setReady] = useState(true)
  
  useEffect(()=>{
	   
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{
        //헤더의 타이틀 변경
        navigation.setOptions({
            title:'꿀팁찜'
        })
        const user_id = Constants.installationId;
        // console.log(user_id)
        // firebase_db.ref('/tip').once('value').then((snapshot) => {
        firebase_db.ref('/like/'+user_id).once('value').then((snapshot) => {
          console.log("파이어베이스에서 꿀팁찜 데이터 가져왔습니다!!")
          let tip = snapshot.val();
          // console.log(tip)
          if(tip.length) {
            setTip(tip)    
            setReady(false)
          }
        });
    },1000)    
  },[])

  const reload = () => {
    const user_id = Constants.installationId;
    firebase_db.ref('/like/' + user_id).once('value').then((snapshot) => {
      //snapshot에 값이 있는지 없는지 체크하는 exists 함수 사용
      if (snapshot.exists()) {
        let tip = snapshot.val();
        let tip_list = Object.values(tip)
        setTip(tip_list)
      } else {
        setReady(true)
        setTip([])
      }

    })
  }

  return ready ? <Loading/> :  (
    <ScrollView style={styles.container}>               
        {
          tip.map((content,i)=>{
            return(<LikeCard content={content} key={i} navigation={navigation}/>)
          })
        }      
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
  middleButton05: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7,
    marginRight:20,
    alignSelf:"flex-end"
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