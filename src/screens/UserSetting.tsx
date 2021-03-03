import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {userLogOut} from '../reducers/';

import Div from '../components/lib/Div';
import DropDownInput from '../components/lib/DropDownInput';
import Text from '../components/lib/Text';
import Toggle from '../components/lib/Toggle';
import Button from '../components/lib/Button';
import {TextInput, ScrollView} from 'react-native';
import {langList} from '../Common';
import { Color } from '../Constant';

const UserSetting = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({nickName:"", birth:"",
  reminder: false, lang: "eng"});

  const onLangSelect = (key:string, value:any) => {
    setInputValue({
      ...inputValue,
      [key]:value
    })  
  }
  useEffect(() => {
    setInputValue({
      nickName: "sungpah",
      birth: '19880103',
      reminder: false,
      lang: 'kor',
    })
  }, [])

  const onChange = (key:string, value: string) => {
    setInputValue({
      ...inputValue,
      [key]:value
    })  
  }

  const submit = () => {
    alert(inputValue.lang);
  }

  const signOut = () => {
    //remove all state!
    dispatch(userLogOut());
    AsyncStorage.clear();
    Actions.intro();
  }
 
  return <ScrollView
    style={{backgroundColor:Color.primary}}
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}>   

    <Div className="p20" style={{marginTop:60,}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:24, fontFamily:"Cochin"}}>Hello, Diana</Text>
      <Text style={{color:'white', fontSize:18, fontFamily:"Cochin"}}>
        manage your
        {"\n"}
        personal information and settings
      </Text>
    </Div>

    <Div className="mt16">
    </Div>
    
    <Div 
      className="p20"
      style={{
      marginTop:40,
      borderRadius:20, 
      backgroundColor:'white', 
      paddingBottom:40,
      paddingTop:40,}}>
      <TextInput
        value={inputValue.nickName}
        style={{
          width: '80%',
          height: 50,
          borderBottomColor: '#ececec',
          borderBottomWidth: 1,
          color:'black'
        }}
        placeholder="nickName"
        onChangeText={(val) => {onChange("nickName", val)}}
      />
      <TextInput
        value={inputValue.birth}
        style={{
          width: '80%',
          height: 50,
          borderBottomColor: '#ececec',
          borderBottomWidth: 1,
          color:'black'
        }}
        placeholder="birth"
        onChangeText={(val) => {onChange("birth", val)}}
      />
      <Div className="flex fdr mt16 AIC">
        <Toggle
          onToggle={(val) => {onChange("reminder", val)}}
          isActive={inputValue.reminder}
        />
        <Text style={{marginLeft:8,}}>reminder?</Text>
      </Div>
      <DropDownInput
        label={""}
        renderKey="lang"
        list={langList}
        txtInit={"choose your la  ng"}
        valueInit={inputValue.lang}
        onSelectClick={onLangSelect}
      />
      <Div className="flex fdr">
        <Button className="btnConLPrimary f1" onPress={submit} style={{marginRight:8,}}><Text className="colWhite">Save</Text></Button>
        <Button className="btnConLGray f1" onPress={signOut} style={{marginLeft:8,}}><Text className="colWhite">signout</Text></Button>
      </Div>
    </Div>
  </ScrollView>
}

export default UserSetting;