import React, {useState,useEffect} from 'react';
import {View,
  Text, TouchableOpacity, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Intro = (props) => {
  const onPress = () => {
    Actions.login();
  }

  return <View style={{position:'relative',}}>
    <Image source={require('../resource/intro.png')}/>
    <View style={{position:'absolute', top:150, left:0, right:0, alignItems:'center', justifyContent:'center',}}>
      <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>One Thought A Day</Text>
      <Text style={{fontSize:16, color:'white', fontWeight:'bold',marginTop:16}}>share your everyday thoughts
        {"\n"}
      and see what others are thinking!
      </Text>
    </View>
    <View
    style={{position:'absolute', bottom:130, left:0, right:0, 
    alignItems:'center',
    justifyContent:'center',}}
    >
      <TouchableOpacity 
      onPress={onPress} 
      style={{width:224, height:59, backgroundColor:'white', 
        borderRadius:30,alignItems:'center',
        justifyContent:'center', 
      }}>
        <Text style={{fontSize:20, fontWeight:'bold',}}>Let's start</Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default Intro;