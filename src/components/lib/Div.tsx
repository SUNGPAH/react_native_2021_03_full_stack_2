import React from "react";
import {View, TouchableOpacity} from 'react-native';
import {styleSheet} from './CustomStyle';

const Div = (props:any) => {	
	const {index, onPress, children, className, style} = props;  
  let styleArr = []	

  if(style){
  	styleArr.push(style)			
  }

	if(className){
		className.split(' ').forEach((cName:string) => {
			if(cName === ""){
				return
			}
	  	styleArr.push(styleSheet[cName])			
		})
	}

	if(onPress) {
	return <TouchableOpacity key={index} onPress={onPress} style={styleArr}>
		{children}
	</TouchableOpacity>		
	}else{
	return <View key={index} style={styleArr}>
		{children}
	</View>		
	}
}

export default Div;
