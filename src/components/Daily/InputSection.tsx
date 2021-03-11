import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TextInput,Image} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import Button from '../lib/Button';
import Toggle from '../lib/Toggle';
import {memoCreateAPI, getOthersMemoAPI, getQuestionAPI} from '../../apis/memo';
import {setDailyMemo, setOthersMemos, setDailyQuestion} from '../../reducers/memo';

const InputSection = ({dateString}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const dailyQuestion = useSelector((state:any) => state.memo.dailyQuestion);
  const dailyMemo = useSelector((state:any) => state.memo.dailyMemo);

  const onChange = (val) => {
    setIsPublic(val);
  }

  const onPress = () => {
    if(dailyQuestion){
      if(content === ""){
        alert('it is empty');
        return
      }
      submit(content, isPublic, dailyQuestion.id);
    }else{
      return false
    }
  }

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
        if(json.success){
          getOthersMemos(questionId);
        }else{
          alert(json.message);
        }
      })  
    }catch(e){
      alert(e.message);
    }
  }

  useEffect(() => {
    if(!dateString){
      return
    }

    getQuestionAPI(dateString.replaceAll("-", "")).then((json:any) => {
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
      }else{
        dispatch(setDailyMemo(null));
      }
      getOthersMemos(json.question.id);
    })

  }, [dateString])
  
  if(!dailyQuestion) {
    return <></>
  }

  return <Div className="p20"
  style={{
  marginTop:40,
  borderRadius:20, 
  backgroundColor:'white', 
  paddingBottom:40,
  paddingTop:40,}}>
  <Text className="" style={{fontSize:16, fontWeight:'bold', color:"#8fa5db"}}>{dailyQuestion.dateStr}</Text>
  <Text className="" style={{marginTop:16, fontSize:24, fontWeight:'bold',}}>Advice</Text>
  <Text className="" style={{marginTop:8, fontSize:20, fontFamily:"Cochin"}}>{dailyQuestion.content}</Text>

  <Div style={{marginTop:32, marginBottom:32, borderTopWidth:1, borderColor:'#e6eaf3',}}></Div>
  {
    dailyMemo ?
    <Div className="pr">
      <Text style={{fontSize:20, fontFamily:"Cochin"}}>{dailyMemo.content}</Text>
    </Div>
    :
    <TextInput
    multiline
    style={{borderWidth:0, borderColor:'transparent', padding:16, height:200,}}
    placeholder="Enter text (2,200 characters limit)"
    onChangeText={(value) => setContent(value)}
    value={content}/>
  }
  {
    !dailyMemo &&
    <Div className="fdr AIC fJCSB">
      <Div className="fdr AIC">
        <Toggle
          onToggle={(val) => {onChange(val)}}
          isActive={isPublic}
        />
        <Text style={{color:"#777d92", marginLeft:16,}}>is public</Text>
      </Div>
      <Button onPress={onPress} className="btnConLPrimary pl20 pr20">
        <Text className="colWhite fL">Save</Text>
      </Button>
    </Div>
  }
</Div>
}

export default InputSection;