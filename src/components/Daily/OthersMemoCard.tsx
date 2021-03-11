import React from 'react';
import {Image} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import Button from '../lib/Button';

const OthersMemoCard = ({index, othersMemo, likeOthersMemo}) => {
  return <Div className="p20 bgWhite pr" 
  key={index} style={{width:300, height:150, borderRadius:12, marginRight:8,}}>
  <Text style={{fontSize:16, fontFamily:"Cochin"}}>{othersMemo.content}</Text>

  <Div style={{position:"absolute", 
    bottom:10, right:20,}}>
    <Text style={{color:"#767676", fontFamily:"Cochin"}}>
    {othersMemo.user.nickName}</Text>
  </Div>

  <Div style={{position:"absolute", bottom:10, left:20,}}>
    <Button onPress={(e:any) => {likeOthersMemo(othersMemo)}} className="fdr">
      {
        othersMemo.doILike ?
        <Image style={{width:20, height:20,}} source={require('../../resource/like_active.png')} />
        :
        <Image style={{width:20, height:20,}} source={require('../../resource/like.png')} />
      }
      <Text style={{color:'#777d92', marginLeft:10,}}>{othersMemo.likesCount}</Text>
    </Button>
  </Div>
</Div>
}

export default OthersMemoCard;

