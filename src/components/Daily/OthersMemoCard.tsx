import React, {useState,useEffect} from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {TextInput,} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import Button from '../lib/Button';

const OthersMemoCard = ({index, othersMemo, likeOthersMemo}) => {
  return <Div className="p20 bgWhite pr" 
  key={index} style={{width:300, height:150, borderRadius:12, marginRight:4,}}>
  <Text style={{fontSize:16, fontFamily:"Cochin"}}>{othersMemo.content}</Text>

  <Div style={{position:"absolute", 
    bottom:10, right:20,}}>
    <Text style={{color:"#767676", fontFamily:"Cochin"}}>
    {othersMemo.user.nick_name}</Text>
  </Div>

  <Div style={{position:"absolute", bottom:10, left:20,}}>
    <Button onPress={(e:any) => {likeOthersMemo(othersMemo)}}>
      {
        othersMemo.do_i_like ?
        <Text className="colRed">heart</Text>
        :
        <Div></Div>
      }
      <Text>Thumb:</Text>
      <Text>likes - {othersMemo.likes}</Text>
    </Button>
  </Div>
</Div>
}

export default OthersMemoCard;

