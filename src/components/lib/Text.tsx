import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {
	StyleSheet, View,
} from 'react-native';

import {styleSheet} from './CustomStyle';
import CustomText from './CustomText';

const Text = (props:any) => {
	return <CustomText {...props}>{props.children}</CustomText>
}

export default Text;
