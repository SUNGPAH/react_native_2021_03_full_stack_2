import React, {useState,useEffect} from 'react';
import {View,
  Text, TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Intro = (props) => {
  //Actions.replace('login');

  const onPress = () => {
    // Actions.replace('login');
    Actions.login();
  }

  return <View><Text>intro page</Text>
    <TouchableOpacity onPress={onPress}>
      <Text>start</Text>
    </TouchableOpacity>
  </View>
}

export default Intro;