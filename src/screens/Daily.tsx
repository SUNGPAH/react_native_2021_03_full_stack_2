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
      getOthersMemoAPI(json.question.id).then((json:any) => {
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
    })
  }, []);

  //이 서밋 함수에는 appState가 쓰이지 않음. dispatch는 해주지만!
  const submit = (content:string, isPublic: boolean, questionId: number) => {
    //여기에 appState가 쓰이지 않는게 중요!
    const payload = {
      memoId: 123124, //some random -- why? 
      questionId: questionId,
      content: content,
      isPublic: isPublic
    };

    dispatch(setDailyMemo(payload))
    const camelToSnakeCase = (str:string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

    let snakePayload = {}
    Object.entries(payload).forEach(([key, value]) => {
      snakePayload[camelToSnakeCase(key)] = value;
    })

    try{
      memoCreateAPI(snakePayload).then((json:any) => {
        //백그라운드 작업이 잘 된다고 가정하고 시작.
        if(json.success){
          //더 완벽히 하기 위해선, 리턴된 id값까지 업데이트해주면 되지만 생략
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
        }else{
          alert(json.message);
        }
      })  
    }catch(e){
      alert(e.message);
    }
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
      <InputSection submit={submit}/>
      <OthersMemos/>
    </ScrollView>
  </Div>
}

export default Daily;