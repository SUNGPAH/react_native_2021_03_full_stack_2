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

  return <Div className="">
    <ScrollView
      style={{backgroundColor:"#98afe7"}}
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
      <Div 
        className="p20"
        style={{
        marginTop:40,
        borderRadius:20, 
        backgroundColor:'white', 
        paddingBottom:40,
        paddingTop:40,}}>
        <Text className="" style={{fontSize:16, fontWeight:'bold', color:"#8fa5db"}}>Jan 21,2021</Text>
        <Text className="" style={{marginTop:16, fontSize:24, fontWeight:'bold',}}>Advice</Text>
        <Text className="" style={{marginTop:8, fontSize:20, fontFamily:"Cochin"}}>{question.content}</Text>

        <Div style={{marginTop:32, marginBottom:32, borderTopWidth:1, borderColor:'#e6eaf3',}}></Div>
        {
          memo ?
          <Div className="pr">
            <Text style={{fontSize:20, fontFamily:"Cochin"}}>{memo.content}</Text>
            <Text style={{position:"absolute", right:0, bottom:0,}}>likes {memo.likes}</Text>
          </Div>
          :
          <TextInput
          multiline
          style={{borderWidth:0, borderColor:'transparent', padding:16, height:200,}}
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
      </Div>

      <Div className="flex fdr mt20">
        <Button 
          className="btnConLGray f1"
          onPress={() => {flatListRef.current.scrollToEnd()}}>
          <Text>go back</Text>
        </Button>

        <Button
          className="btnConLGray f1"
          onPress={() => {flatListRef.current.scrollToOffset(0)}}>
          <Text>go top</Text>
        </Button>
      </Div>
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

        {/*
          ListHeaderComponent={<View style={{backgroundColor:'red',}}><Text>Header Component</Text></View>}
          ListFooterComponent={<View><Text>Footer Component</Text></View>}
        */}
      </Div>
    </ScrollView>
  </Div>
}

export default Daily;