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
import {ScrollView} from 'react-native';
import {updateUserSettingAPI, getUserSettingAPI} from '../apis/Auth';
import {langList} from '../Common';
import { Color } from '../Constant';

const UserSetting = (props) => {
  const dispatch = useDispatch();

  //간단한 페이지의 경우에는 useEffect로 해볼 수도 있습니다.
  const [inputValue, setInputValue] = useState({isReminderOn: false, lang: "eng", alarmTimeInt: null});

  const onLangSelect = (key:string, value:any) => {
    setInputValue({
      ...inputValue,
      [key]:value
    })  
  }
  useEffect(() => {
    getUserSettingAPI().then((json:any) => {
      const userSetting = json.user_setting;
      if(!userSetting) {
        return;
      }

      setInputValue({
        isReminderOn: userSetting.is_reminder_on,
        lang: userSetting.lang,
        alarmTimeInt: userSetting.alarm_time_int,
      })
    });
  }, [])

  const onChange = (key:string, value: string) => {
    setInputValue({
      ...inputValue,
      [key]:value
    })  
  }

  const submit = () => {
    const camelToSnakeCase = (str:string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

    let snakePayload = {}
    Object.entries(inputValue).forEach(([key, value]) => {
      snakePayload[camelToSnakeCase(key)] = value;
    })

    updateUserSettingAPI(snakePayload).then((json:any) => {
      alert('updated');
    })
  }

  const signOut = () => {
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
      
      <Div className="flex fdr mt16 AIC">
        <Toggle
          onToggle={(val) => {onChange("isReminderOn", val)}}
          isActive={inputValue.isReminderOn}
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