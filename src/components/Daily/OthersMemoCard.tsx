import React, {useState,useEffect} from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {TextInput,} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import Button from '../lib/Button';

const OthersMemoCard = ({index, othersMemo, likeOthersMemo}) => {
  return <Div className="borderPrimary p20" key={index} style={{width:300, height:150,}}>
  <Text>{othersMemo.content}</Text>
  <Text>id - {othersMemo.id}</Text>
  <Text>quesetion_id {othersMemo.question_id}</Text>
  <Text>nick name:: {othersMemo.user.nick_name}</Text>

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
}

export default OthersMemoCard;

