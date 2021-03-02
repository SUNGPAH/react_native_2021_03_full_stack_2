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
import {TextInput,} from 'react-native';
import {langList} from '../Common';

const UserSetting = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({nickName:"", birth:"",
  reminder: false, lang: "eng"});
  //여길 어떻게 할 것인지에 따라서 구조가 바뀜.
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
 
  return <Div><Text>Usersetting</Text>
    <Div className="mt80">
    </Div>
    <Div>
      <Text>asdf</Text>
    </Div>
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
    <Div className="flex fdr">
      <Text>reminder?</Text>
      <Toggle
        onToggle={(val) => {onChange("reminder", val)}}
        isActive={inputValue.reminder}
      />
    </Div>
    <DropDownInput
      label={"Language"}
      renderKey="lang"
      list={langList}
      txtInit={"choose your lang"}
      valueInit={inputValue.lang}
      onSelectClick={onLangSelect}
    />
    <Button className="btnConLPrimary" onPress={submit}><Text className="colWhite">go</Text></Button>
    <Button className="btnConLPrimary" onPress={signOut}><Text className="colWhite">signout</Text></Button>
  </Div>
}

export default UserSetting;