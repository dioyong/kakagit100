import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

export default function AboutPage({navigation,route}) {

  const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"

  useEffect(()=>{
    navigation.setOptions({
      title: '소개페이지',
      headerStyle: {
        backgroundColor: '#1F266A',
        shadowColor: "#1F266A",
      },
      headerTintColor: "#fff",
    })
  },[])
  return (
      <View style={styles.container}>
          <Text style={styles.title}> HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다 </Text>

          <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={'cover'}/>
            <Text style={styles.desc01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.desc02}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>여러분의 인스타계정</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F266A',
      alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        paddingLeft: 30,
        paddingTop: 50,
        paddingRight: 30
    },
    textContainer: {
      width:300,
      height:500,
      backgroundColor:"#fff",
      marginTop:50,
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center"
  },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }    

});    