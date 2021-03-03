import React, {useState,useEffect} from 'react';
import { Actions } from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';
import {signInAPI} from '../apis/Auth';
import {setJwtToken} from '../reducers/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Div from '../components/lib/Div';
import Button from '../components/lib/Button';
import Text from '../components/lib/Text';
import {TextInput,} from 'react-native';
import fcmListener from '../listeners/fcm';
import { Color } from '../Constant';

const Login = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({email:"", pw: ""});
  
  const login = () => {
    const payload = {email: inputValue.email, password: inputValue.pw}
    signInAPI(payload).then((json) => {
      if(!json.success){
        alert(json.message);
        return 
      }

      const jwtToken = json.jwt_token;
      fcmListener.initialize(jwtToken); //this might be the way.. 
      dispatch(setJwtToken(jwtToken));

      console.log(jwtToken);
      AsyncStorage.setItem("jwt_token", jwtToken);  
      Actions.list();
    })
  }

  const goToSignup = () => {
    Actions.signup();
  }

  const onChange = (key:string, value:string) => {
    setInputValue({
      ...inputValue,
      [key]:value.toLowerCase()
    })  
  }

	return <Div className="p20">
    <Div className="mt80"></Div>
    <TextInput
      value={inputValue.email}
      style={{
        width: '100%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black'
      }}
      placeholder="email"
      onChangeText={(val) => {onChange("email", val)}}
    />
    <TextInput
      value={inputValue.pw}
      style={{
        width: '100%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black'
      }}
      placeholder="password"
      onChangeText={(val) => {onChange("pw", val)}}
    />
    <Div className="fdr mt80">
      <Button className="btnConLPrimary f1" style={{marginRight:8,}} onPress={login}>
        <Text className="colWhite">Login</Text>
      </Button>  
      <Button className="btnOutLPrimary f1" style={{marginLeft:8,}} onPress={goToSignup}>
        <Text style={{color:Color.primary}}>Signup</Text>
      </Button> 
    </Div> 
  </Div>
}

export default Login;