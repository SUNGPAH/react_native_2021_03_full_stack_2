import React, {useEffect, useState} from "react";
import {View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity,
Platform,
UIManager, LayoutAnimation,
} from 'react-native';

import Div from './Div';
import {Color} from '../../Constant';

const Toggle = (props) => {
  // const [isActive, setIsActive] = useState(props.isActive);
  const onPress = () => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // setIsActive(prev => !prev); 
    props.onToggle(!props.isActive);
  }
  return <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.viewToggle, 
    !props.isActive ? {backgroundColor: '#000'} : { backgroundColor: Color.primary,  alignItems: 'flex-end'}]}>
      <Div style={styles.circleToggle}></Div>
    </View>
  </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
  viewToggle: {
  height: 22,
  width: 45,
  borderRadius: 20,
  justifyContent: 'center'
},
circleToggle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: '#fff'
}
});

export default Toggle;