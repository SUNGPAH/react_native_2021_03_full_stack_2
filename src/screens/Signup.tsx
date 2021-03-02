import React, {useState,useEffect} from 'react';
import {TextInput,} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Div from '../components/lib/Div';
import Text from '../components/lib/Text';
import Button from '../components/lib/Button';
import DropDownInput from '../components/lib/DropDownInput';
import {emailRule, langList} from '../Common';
import fcmListener from '../listeners/fcm';

const Signup = (props) => {
  const [inputValue, setInputValue] = useState({
    email:"",
    nickName:"",
    pw: "",
    pwCheck: "",
    lang: "",
  });

  const onChange = (key:string, value:string) => {
    setInputValue({
      ...inputValue,
      [key]:value
    })
  }

  const createAccount = () => { 
    const result = validateInput();
    if(!result.success){
      alert(result.message);
      return
    }

    const payload = {
      email: inputValue.email,
      password: inputValue.pw,
      nick_name: inputValue.nickName,
    }

    setTimeout(() => {
      const jwtToken = '123123';
      fcmListener.initialize(jwtToken); //this might be the way.. 
    }, 1000)

    Actions.list();
  }

  const validateInput = () => {
    if(inputValue.email) {
      if(!emailRule.test(inputValue.email)) {
        return {
          success: false,
          message: "이메일형식이 올바르지 않습니다."
        }
      }
    } else {
      return {
        success: false,
        message: "이메일을 입력해주세요."
      }
    }

    if (inputValue.pw !== inputValue.pwCheck) {
      return {
        success: false,
        message: "check your password",
      }
    }

    return {
      success: true,
      message: "good to go"
    }
  }

  return <Div>
    <Text className="fM colPrimary bold">Email</Text>
    <TextInput
      value={inputValue.email}
      style={{
        width: '80%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black'
      }}
      placeholder="email"
      onChangeText={(val) => {onChange("email", val)}}
    />

    <Text className="fM colPrimary bold">Nick Name</Text>
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

  
    <Text className="fM colPrimary bold">Password</Text>
    <TextInput
      value={inputValue.pw}
      style={{
        width: '80%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black'
      }}
      placeholder="password"
      onChangeText={(val) => {onChange("pw", val)}}
    />
    <Text className="fM colPrimary bold">Password Check</Text>
    <TextInput
      value={inputValue.pwCheck}
      style={{
        width: '80%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black'
      }}
      placeholder="password check"
      onChangeText={(val) => {onChange("pwCheck", val)}}
    />
    <DropDownInput
      label={"Language"}
      renderKey="lang"
      list={langList}
      txtInit={"choose your lang"}
      valueInit={inputValue.lang}
      onSelectClick={onChange}
    />
    <Button onPress={createAccount}>
      <Text>Create an Account</Text>
    </Button>
  </Div>
}

export default Signup;