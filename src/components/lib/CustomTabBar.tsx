import React from 'react';
import { Actions } from 'react-native-router-flux';

import Div from './Div';
import Button from './Button';
import Text from './Text';
import {Color} from '../../Constant';

const CustomTabBar = ({navigation}:any) => {
  const {state} = navigation;
  const activeTabIndex = state.index;
  return <Div className="fdr fJCSB posAb" style={{height:60, top:20, right:0, width:200,}}>
    {
      state.routes.map((element,index) => {
        const routeName = element.routeName
        let pathNameKor = "";
        if(routeName === "calendar"){
          pathNameKor = "calendar"
        }else if(routeName === "daily"){
          pathNameKor = "daily"
        }else if(routeName === "userSetting"){
          pathNameKor = "setting"
        }
        return <Button className="fc f1" key={element.key} onPress={() => Actions[element.key]()}>
          {
            index === activeTabIndex ?
            <Text className="fS colWhite bold">{pathNameKor}</Text>
            :
            <Text className="fS">{pathNameKor}</Text>
          }
        </Button>

      })
    }
  </Div>
}

export default CustomTabBar
