import React, {useState,useEffect, useRef} from 'react';
import {ScrollView, View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {TextInput,} from 'react-native';
import Div from '../components/lib/Div';
import Text from '../components/lib/Text';
import Button from '../components/lib/Button';
import OthersMemoCard from '../components/Daily/OthersMemoCard';

import {memoCreateAPI, getQuestionAPI, getOthersMemoAPI, memoLikeAPI, memoUnLikeAPI} from '../apis/memo';

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

//flastListRef.current.scrollToEnd()

const Daily = (props) => {
  // const jwtToken = useSelector((state:any) => state.user.jwtToken);
  const userBasicInfo = useSelector((state:any) => state.user.userBasicInfo);  
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState({title:"", content:"", id:null});  
  const [memo, setMemo] = useState<MemoType>(null);
  const [othersMemos, setOthersMemos] = useState<OthersMemoType[]>([]);
  const flatListRef = useRef(null)

  useEffect(() => {
    getQuestionAPI("").then((json:any) => {
      setQuestion(json.question);
      setMemo(json.memo);
      getOthersMemoAPI(json.question.id).then((json:any) => {
        console.log(json);
        if(json.success){
          setOthersMemos(json.list);
        }
      })
    })
  }, []);

  const submit = () => {
    const resMemo = {
      question_id: question.id,
      content: content,
      is_public: true
    };

    setMemo(resMemo);
    
    try{
      memoCreateAPI(resMemo).then((json:any) => {
        console.log('result');
        console.log(json);
        if(json.success){
          alert('success');
        }else{
          alert(json.message);
        }
      })  
    }catch(e){
      alert(e.message);
    }
    

    // requires :content, type: String
    // requires :question_id, type: Integer
    // requires :is_public, type: Boolean
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

    if (newItem.do_i_like){
      memoLikeAPI(memo.id).then((json:any) => {
        console.log(json);
      })
    }else{
      memoUnLikeAPI(memo.id).then((json:any) => {
        console.log(json);
      })
    }
  }
  
  const renderOthersMemoCard = ({ item }) => (
    <OthersMemoCard
      index={1}
      othersMemo={item}
      likeOthersMemo={likeOthersMemo}
    />
  );

  return <Div className="p20">
    <ScrollView
      style={{paddingLeft:20, paddingRight:20,}}
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}>        

      <Div className="mt80">
      </Div>

      <Text>Today’s Thought</Text>

      <Text>
      hey -{userBasicInfo.nick_name}-,
      email: {userBasicInfo.email}-,
      share your thought of the day
      </Text>

      <Text className="bold fL">id: {question.id}</Text>
      <Text className="fM">content: {question.content}</Text>
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

      <Div>
        <TouchableOpacity
          onPress={() => {flatListRef.current.scrollToEnd()}}>
          <Text>go back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {flatListRef.current.scrollToOffset(0)}}>
          <Text>go top</Text>
        </TouchableOpacity>
      </Div>
      <Div className="mt50"></Div>
      <Text>Other Thoughts
      See others’ thoughts on the question
      *default / likes / region / i liked
      filter
      </Text>

      <FlatList
        ref={flatListRef}
        horizontal={true}
        style={{}}
        data={othersMemos}
        renderItem={renderOthersMemoCard}
        /*
        사이즈를 안다면.
        */
        onEndReached={() => {
          if(othersMemos.length > 0){
            //this is percent... so, better to calculate nicely.
            //for instance, if the length is..
            console.log('on_end_reached');
          }
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View style={{backgroundColor:'red',}}><Text>Header Component</Text></View>}
        ListFooterComponent={<View><Text>Footer Component</Text></View>}
      />
    </ScrollView>
  </Div>
}

export default Daily;