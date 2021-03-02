import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Div from './Div';
import Button from './Button';
import {Color} from '../../Constant';

const CustomNavBar = ({navigation}:any) => {
  const {state} = navigation;
  const activeTabIndex = state.index;

  return <Div className="fdr fJCSB" style={{height:0,}}>
  </Div>
}

export default CustomNavBar