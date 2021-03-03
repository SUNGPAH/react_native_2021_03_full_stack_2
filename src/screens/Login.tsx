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

      //eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDYyNzExMjgwMDB9.hPjMqwjA_0jWyPD4KTbrckvsDjXCr4Kf7VYo71ZhIlQ



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

	return <Div className="p20"><Text>login page</Text>
    <Div className="mt80"></Div>
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

    <Button className="btnConLPrimary" onPress={login}>
      <Text className="colWhite">Login</Text>
    </Button>  

    <Button className="btnOutLPrimary" onPress={goToSignup}>
      <Text>Signup</Text>
    </Button>  
  </Div>
}

export default Login;