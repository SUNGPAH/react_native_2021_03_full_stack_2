import React, {useState,useEffect} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {TextInput,} from 'react-native';
import Div from '../components/lib/Div';
import Text from '../components/lib/Text';
import Button from '../components/lib/Button';

type MemoType = {
  id?:number,
  content?:string,
  likes?:number,
  created_at?:string,
}

type OthersMemoType = {
  id?:number,
  content?:string,
  likes?:number,
  user?:any,
  created_at?:string,
  do_i_like?:boolean,
}

const PastDaily = (props) => {
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState({title:"", content:"", id:null});  
  const [memo, setMemo] = useState<MemoType>(null);
  const [othersMemos, setOthersMemos] = useState<OthersMemoType[]>([]);

  useEffect(() => {
    const resQuestion = {
      id: 5,
      date: '2021-02-21',
      title: "Advice!!",
      content: "If you could go back in time, what’s one piece of advice you’d give to your younger self?",
      question_translation: "한국어 트렌스레이션이라고 가정하자"
    }
    setQuestion(resQuestion);
    let resOthersMemos = []

    for(var i=0; i <10; i++) {
      resOthersMemos.push({
        id: i,
        content: "yo this is sample",
        likes: i,
        user: {
          nick_name: `{tester_${i}}`
        },
        do_i_like: true,
      },)
    }
    setOthersMemos(resOthersMemos);
  }, []);

  const submit = () => {
    const resMemo = {
      question_id: 5,
      content: content,
      likes: 10,
    }
    setMemo(resMemo);
  }

  const likeOthersMemo = (memo:OthersMemoType) => {    
    const index = othersMemos.findIndex((othersMemo:OthersMemoType) => othersMemo.id === memo.id)
    const copiedOthersMemos = [...othersMemos];
    const newItem = {...copiedOthersMemos[index], 
      do_i_like: !memo.do_i_like,
      likes: memo.do_i_like ? memo.likes - 1: memo.likes + 1
    }

    copiedOthersMemos[index] = newItem
    setOthersMemos(copiedOthersMemos);
  }

  const back = () => {
    Actions.pop();
  }

  return <Div className="p20">
    <ScrollView
      style={{paddingLeft:20, paddingRight:20,}}
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}>        


      <Div className="mt80">
      </Div>

      <Button onPress={back}><Text>Back</Text></Button>
      
      <Text>?? Thought</Text>

      <Text>
        hey Diana,
        <Text className="colRed">not today</Text>
      </Text>

      <Text className="bold fL">{question.title}</Text>
      <Text className="fM">{question.content}</Text>

      {
        memo ?
        <Div className="borderMidGray p20">
          <Text>writing: {memo.content}</Text>
          <Text>likes : {memo.likes}</Text>
        </Div>
        :
        <TextInput
        multiline
        style={{borderWidth:1, borderColor:'#e0e3e9', padding:16, height:200,}}
        placeholder="문제에 대한 내 답변을 정리해보세요. 스터디 참여 시, 참고하실 수 있습니다."
        onChangeText={(value) => setContent(value)}
        value={content}/>
      }

      {
        !memo &&
        <Div>
          <Text>Toggle btn</Text>
          <Button onPress={submit} className="bg_primary"><Text className="colWhite">save btn</Text></Button>
        </Div>
      }

      <Div className="mt50"></Div>
      <Text>Other Thoughts
      See others’ thoughts on the question
      *default / likes / region / i liked
      filter
      </Text>

      {
        othersMemos.map((othersMemo:any, index:number) => {
          return <Div className="borderPrimary p20" key={index}>
            <Text>{othersMemo.content}</Text>
            <Text>id - {othersMemo.id}</Text>
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
        })
      }
    </ScrollView>
  </Div>
}

export default PastDaily;