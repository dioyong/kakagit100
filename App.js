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
      <View style={styles.cont1}>        
      </View>
      <View style={styles.cont2}>   
        <View style={styles.innerOne}>
        </View>
        <View style={styles.innerTwo}>
        </View>

      </View>
    </View>




  );
}
const styles = StyleSheet.create({
  container: {
    //영역을 잡는 속성입니다. 따로 자세히 다룹니다.
    //flex: 1은 전체 화면을 가져간다는 뜻입니다
    flex: 1,
    //영역의 배경 색을 결정합니다
    backgroundColor: '#fff',
    //아래 두 속성은 영역 안의 컨텐츠들의 배치를 결정합니다.
    //flex를 자세히 다룰때 같이 자세히 다룹니다
    justifyContent: "center",
    alignContent: "center"
  },
  cont1: {
    flex: 1,
    backgroundColor: 'red',
  },
  cont2: {
    flex: 2,
    backgroundColor: 'yellow',
    flexDirection:"row",
  },
  innerOne: {
    flex: 1,
    backgroundColor: "blue"
  },
  innerTwo: {
    flex: 4,
    backgroundColor: "orange"
  },
  textContainer: {
    //영역의 바깥 공간 이격을 뜻합니다(하단 이미지 참조)
    margin: 30,
    //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
    padding: 20,
    //테두리의 구부러짐을 결정합니다. 지금 보면 조금 둥글죠?
    borderRadius: 10,
    //테두리의 두께를 결정합니다
    borderWidth: 2,
    //테두리 색을 결정합니다
    borderColor: "#000",
    //테구리 스타일을 결정합니다. 실선은 solid 입니다
    borderStyle: "dotted",
  },
  textStyle: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color: "red",
    //글자의 크기를 결정합니다
    fontSize: 20,
    //글자의 두께를 결정합니다
    fontWeight: "700",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign: "center"
  }
});