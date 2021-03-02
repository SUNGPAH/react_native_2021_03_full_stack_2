import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {
	StyleSheet, View, TouchableOpacity
} from 'react-native';

import {styleSheet} from './CustomStyle';

const Button = (props:any) => {
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

	return <TouchableOpacity key={index} onPress={onPress} style={styleArr}>
		{children}
	</TouchableOpacity>
}

export default Button;
