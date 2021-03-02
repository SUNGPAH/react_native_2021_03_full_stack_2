import React from "react";
import {Text} from 'react-native';
import {styleSheet} from './CustomStyle';

const CustomText = (props:any) => {
	const {index, onPress, children, className, style, numberOfLines} = props;
  let styleArr = []

  if(style){
  	styleArr.push(style)
  }

	if(className){
		className.split(' ').forEach((cName:string) => {
			if(cName === ""){
			}
	  	styleArr.push(styleSheet[cName])
		})
	}
	return <Text style={styleArr} numberOfLines={numberOfLines} onPress={onPress}>{props.children}</Text>
}

export default CustomText;
