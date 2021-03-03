import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  Linking,
  Alert,
} from 'react-native';
import {signInAPI, validateAPI} from '../apis/Auth';
import {setJwtToken, setUserBasicInfo, setUserSetting} from '../reducers/user';
import Div from '../components/lib/Div';
import Text from '../components/lib/Text';
import {APP_VERSION, STORE_URL} from '../Constant';
import fcmListener from '../listeners/fcm';

const Splash = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({email:"", pw: ""});
  const [initialLoading, setInitialLoading] = useState(false);
  const [spinnerState, setSpinnerState] = useState(true);

  useEffect(() => {
    const os = Platform.OS;
    setTimeout(() => {
      // mobileInitConfigAPI(Platform.OS, APP_VERSION).then(...
      const LTS_APP_VERSION = 1;
      if(os === 'ios'){
        if(LTS_APP_VERSION > APP_VERSION) {
          const message  ='update! required';
          Alert.alert(
            "",
            message,
            [
              {
                text: "업데이트 하기", onPress: () => {
                  openStoreUrl();
                }
              }
            ],
            { cancelable: false }
          );
        }else{
          AsyncStorage.getItem("jwt_token").then((jwtToken) => {
            if (jwtToken){

              dispatch(setJwtToken(jwtToken));
              validateAPI().then((json) => {
                if(json.success){
                  saveJwtToken(jwtToken)
                  dispatch(setUserBasicInfo(json.user));
                  dispatch(setUserSetting({
                    reminder: true,
                    is_public: true
                  }));
                  Actions.list();
                }else{
                  Actions.intro();
                }
              })
              setSpinnerState(false);
              return ;
            }else{
              setInitialLoading(false);
              setSpinnerState(false);
              Actions.intro();
            }
          });          
        }
      } 
    }, 500);
  }, [])

  const saveJwtToken = (jwtToken) => {
    dispatch(setJwtToken(jwtToken))
    AsyncStorage.setItem("jwt_token", jwtToken);
  };

  const openStoreUrl = async () => {
    await Linking.openURL(STORE_URL);
  }

  const login = () => {
    setTimeout(() => {
      const jwtToken = '123123';
      fcmListener.initialize(jwtToken); //this might be the way.. 
    }, 1000)
    Actions.list();
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
    <Text>splash check</Text> 

  </Div>
}

export default Splash;