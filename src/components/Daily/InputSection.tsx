import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TextInput,Image} from 'react-native';
import Div from '../lib/Div';
import Text from '../lib/Text';
import Button from '../lib/Button';
import Toggle from '../lib/Toggle';

const InputSection = ({submit}) => {
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const dailyQuestion = useSelector((state:any) => state.memo.dailyQuestion);
  const dailyMemo = useSelector((state:any) => state.memo.dailyMemo);

  const onChange = (val) => {
    setIsPublic(val);
  }

  const onPress = () => {
    if(dailyQuestion){
      submit(content, isPublic, dailyQuestion.id);
    }else{
      return false
    }
  }

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
  <Text className="" style={{fontSize:16, fontWeight:'bold', color:"#8fa5db"}}>Jan 21,2021</Text>
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