import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig";
export default function LikeCard({content, navigation}) {

  const detail = () => {
    navigation.navigate('DetailPage', {idx:content.idx})
  }

  const remove = () => {
    const user_id = Constants.installationId;

    firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
        Alert.alert("삭제 완료");
        // navigation.navigate('LikePage')
        reload()
    })
  }


    return (      
      <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}>
        <Image style={styles.cardImage} source={{uri:content.image}}/> 
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
          <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
          <Text style={styles.cardDate}>{content.date}</Text>
         
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => detail()}>
              <Text style={styles.buttonText}>자세히보기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => remove()}>
              <Text style={styles.buttonText}>찜해제</Text>
            </TouchableOpacity>
          </View>
       </View>  
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    width: 90,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'deeppink',
    borderRadius: 7
  },
  buttonText: {
    color: 'deeppink',
    textAlign: 'center'
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
})

