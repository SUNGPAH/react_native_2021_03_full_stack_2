import React, {useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import OthersMemoCard from './OthersMemoCard';
import {OthersMemoType} from '../../reducers/memo';
import {updateOthersMemo} from '../../reducers/memo';
import {memoLikeAPI, memoUnLikeAPI} from '../../apis/memo';

const OthersMemos = () => {
  const dispatch = useDispatch();
  const flatListRef = useRef(null)
  const othersMemos = useSelector((state:any) => state.memo.othersMemos);  

  const renderOthersMemoCard = ({ item }) => (
    <OthersMemoCard
      index={1}
      othersMemo={item}
      likeOthersMemo={likeOthersMemo}
    />
  );

  const likeOthersMemo = useCallback((memo:OthersMemoType) => {    
    const index = othersMemos.findIndex((othersMemos:OthersMemoType) => othersMemos.id === memo.id)
    const othersMemo = othersMemos[index]
    const newDoILike = !othersMemo.doILike;

    dispatch(updateOthersMemo({id: memo.id, doILike:newDoILike}));

    if (newDoILike){
      memoLikeAPI(memo.id).then((json:any) => {
        console.log(json);
      })
    }else{
      memoUnLikeAPI(memo.id).then((json:any) => {
        console.log(json);
      })
    }
  },[othersMemos]);

  return <Div>
    <Div className="mt50"></Div>
    <Div className="p20">
      <Text style={{fontSize:20, fontWeight:'bold', color:'white',}}>Other Thoughts</Text>
      <Text style={{fontSize:16, color:"#eef2ff",}}>See others’ thoughts on the question</Text>
      <FlatList
        style={{marginTop:32,}}
        ref={flatListRef}
        horizontal={true}
        data={othersMemos}
        renderItem={renderOthersMemoCard}
        onEndReached={() => {
          if(othersMemos.length > 0){
            console.log('on_end_reached');
          }
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.id}
      />
    </Div>
  </Div>
}

export default OthersMemos