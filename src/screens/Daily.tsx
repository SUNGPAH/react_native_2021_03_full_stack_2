import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Div from '../components/lib/Div';
import Text from '../components/lib/Text';

import InputSection from '../components/Daily/InputSection';
import OthersMemos from '../components/Daily/OthersMemos';

import {setDailyQuestion, setDailyMemo, setOthersMemos} from '../reducers/memo';
import {memoCreateAPI, getQuestionAPI, getOthersMemoAPI} from '../apis/memo';
import { Color } from '../Constant';

const Daily = () => {
  //페이지에서 스테이트가 보이지 않게 합시다! -> 리렌더링 독박 쓴다.
  const dispatch = useDispatch();
  const userBasicInfo = useSelector((state:any) => state.user.userBasicInfo); 
  //유저 베이직 인포의 경우, frequent 한 업데이트가 자주 되진 않기 때문에, 편하게 가져옴 

  useEffect(() => {
    //yyyymmdd
    getQuestionAPI("").then((json:any) => {
      dispatch(setDailyQuestion({
        id: json.question.id,
        content: json.question.content,
        dateStr: json.question.date_str,
      }));
      const memo = json.memo;
      if (memo){
        dispatch(setDailyMemo({
          memoId: memo.id,
          questionId: json.question.id,
          content: memo.content,
          isPublic: memo.is_public
        }));
      }
      getOthersMemos(json.question.id);
    })
  }, []);

  const getOthersMemos = (questionId:number) => {
    getOthersMemoAPI(questionId).then((json:any) => {
      if(json.success){
        const mappedList = json.list.map((x:any) => {
          return {
            id: x.id,
            content: x.content,
            question_id: x.question_id,
            likesCount: x.likes,
            user: {nickName: x.user.nick_name},
            doILike: x.do_i_like
          }
        })
        dispatch(setOthersMemos(mappedList));
      }
    })
  }

  return <Div className="">
    <ScrollView
      style={{backgroundColor:Color.primary}}
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}>        
      <Div className="mt80">
      </Div>
      <Div className="pl20 pr20">
        <Text style={{fontSize:24, fontWeight:'bold',fontFamily:"Cochin"}} className="colWhite">Today’s Thought</Text>
        <Text style={{fontSize:18, fontFamily:"Cochin"}} className="colWhite">
        hey -{userBasicInfo.nick_name}-,
        email: {userBasicInfo.email}-,
        {"\n"}
        share your thought of the day
        </Text>
      </Div>
      <InputSection/>
      <OthersMemos/>
    </ScrollView>
  </Div>
}

export default Daily;