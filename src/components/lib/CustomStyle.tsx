import {
	StyleSheet
} from 'react-native';

import {Color} from '../../Constant';

export const styleSheet = StyleSheet.create({
	f1: {
		flex:1,
	},
  fdr: {
    flexDirection:'row',
  },
  fvc: {
  	flexDirection:'row', alignItems:'center',
  },

  fc: {
    alignItems:'center', justifyContent:'center',
  },

	fEnd: {
		alignItems:"flex-end",
	},

	fJCSB: {
		justifyContent:'space-between',
	},

	flexEnd: {
		justifyContent:'flex-end',
	},

  w20: {
    width:20,
  },

  w30: {
    width:30,
  },

  w40: {
    width:40,
  },

	w60: {
		width:60,
	},

  h20: {
    height:20,
  },

  h30: {
    height:30,
  },

  h40: {
  	height:40,
  },

  w50: {
  	width:300,
  },

  bg_white: {
  	backgroundColor:'white',
  },

  bg_green: {
  	backgroundColor:'green'
  },

  bg_primary: {
  	backgroundColor: 'blue',
  },
	bgBlack: {
		backgroundColor: Color.black,
	},
  bgPrimary: {
    backgroundColor: 'blue',
  },
	bgRed:{
    backgroundColor: Color.red,
  },
	bgGreen:{
		backgroundColor:Color.green,
	},
  bgIceBlue: {
    backgroundColor: Color.ice,
  },

  bgWhite: {
    backgroundColor: Color.white,
  },

  bgLightGray: {
    backgroundColor: Color.light_gray,
  },

	bgLightBlue: {
		backgroundColor: Color.light_blue,
	},

	bgOpaGray: {
		backgroundColor: 'rgba(0,0,0,0.5)',
	},

	bgYellow: {
		backgroundColor:'yellow',
	},

	bgBlackOpacity: {
		backgroundColor:'rgba(0,0,0,0.6)',
	},

  colWhite: {
  	color: Color.white,
  },

  colPrimary: {
  	color: Color.primary,
  },

  colGray: {
    color:"#c3c3c3",
  },
	colStrongGray: {
		color:Color.strong_gray,
	},
  colDarkGray: {
    color:Color.dark_gray,
  },
	colBlack: {
		color:Color.black,
	},
	colRed:{
		color:Color.red,
	},

	fXXXL: {
		fontSize:32,
	},
	fXXL: {
		fontSize:28,
	},
	fL: {
		fontSize:20,
	},
  fML:{
    fontSize:16,
  },
  fM:{
    fontSize:14,
  },
  fS:{
    fontSize:12,
  },
  fXS:{
    fontSize:10,
  },

	ml4:{
		marginLeft:4,
	},
  ml5:{
    marginLeft:5,
  },
	ml8:{
		marginLeft:8,
	},
  ml10:{
    marginLeft:10,
  },
	ml12:{
		marginLeft:12,
	},
  ml15:{
    marginLeft:15,
  },
	ml16:{
		marginLeft:15,
	},
  ml20:{
    marginLeft:20,
  },

	ml24:{
		marginLeft:24,
	},

	mr4:{
		marginRight:4,
	},
	mr5:{
    marginRight:5,
  },
  mr10:{
    marginRight:10,
  },
  mr15:{
    marginRight:15,
  },
  mr20:{
    marginRight:20,
  },

  mb5:{
    marginBottom:5,
  },

	mb8:{
		marginBottom:8,
	},

  mb10:{
    marginBottom:10,
  },
  mb15:{
    marginBottom:15,
  },

	mb16:{
		marginBottom:16,
	},
  mb20:{
    marginBottom:20,
  },
	mb24:{
		marginBottom:24,
	},

	mb32:{
		marginBottom:32,
	},

	mb40:{
		marginBottom:40,
	},

	mt4:{
		marginTop:4,
	},
  mt5:{
    marginTop:5,
  },

	mt8:{
		marginTop:8,
	},

  mt10:{
    marginTop:10,
  },
  mt15:{
    marginTop:15,
  },

	mt16:{
		marginTop:16,
	},

  mt20:{
    marginTop:20,
  },

	mt24:{
		marginTop:24,
	},
	mt30:{
		marginTop:30,
	},

	mt32:{
		marginTop:32,
	},

	mt40:{
		marginTop:40,
	},
	mt50:{
		marginTop:50,
	},

	mt64:{
		marginTop:64,
	},

	mt80:{
		marginTop:80,
	},

  plr5:{
    paddingLeft:5, paddingRight:5,
  },

 	p10: {
 		padding:10,
 	},
  p15: {
    padding:15,
  },

	p16:{
		padding:16,
	},

  p20: {
    padding:20,
  },
  p25: {
    padding:25,
  },

	pl10: {
		paddingLeft:10,
	},
	pl20: {
		paddingLeft:20,
	},

	pr10: {
		paddingRight:10,
	},
	pr20:{
		paddingRight:20,
	},

	pt4:{
		paddingTop:4,
	},

  pt20: {
    paddingTop:20,
  },

	pt24:{
		paddingTop:24,
	},

	pt30: {
		paddingTop:30,
	},

	pb4: {
		paddingBottom:4,
	},

	pb10:{
		paddingBottom:10,
	},
	pb20:{
		paddingBottom:20,
	},

	pb30:{
		paddingBottom:30,
	},
	pb40:{
		paddingBottom:40,
	},

	pb50:{
		paddingBottom:50,
	},

 	borderRadiusS: {
 		borderRadius:3,
 	},

	borderRadiusM: {
		borderRadius:8,
	},

  borderRadiusL: {
    borderRadius:12,
  },

  borderTopRadiusL: {
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
  },

	borderTopMidGray: {
		borderTopWidth:1,
		borderColor:Color.mid_gray,
	},

	borderLeftMidGray:{
		borderLeftWidth:1,
		borderColor:Color.mid_gray,
	},

  borderStrongGray: {
    borderWidth:1,
    borderColor: Color.strong_gray,
  },

	borderMidGray: {
		borderWidth:1,
    borderColor: Color.mid_gray,
	},

	borderRed: {
		borderWidth:1,
		borderColor:Color.red,
	},

	borderBottomMidGray: {
		borderBottomWidth:1,
		borderBottomColor: Color.mid_gray,
	},

	borderPrimary: {
		borderWidth:2,
		borderColor: Color.primary,
	},

  bold: {
    fontWeight:'bold',
  },

  AIFS: {
    alignItems:'flex-start',
  },

	AIC: {
		alignItems:"center",
	},

  fWrap: {
    flexWrap: 'wrap'
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
	shadow2:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
  hide: {

  },
	btnDefault: {
		height:38, lineHeight:38,
		justifyContent:'center', alignItems:'center',
		borderRadius:3,
		paddingLeft:5, paddingRight:5,
	},

	btnConLPrimary: {
		backgroundColor: Color.primary,
		height:56,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},

	btnConLRed:{
		backgroundColor: Color.red,
		height:56,
		fontSize:14,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},

	btnConLGray:{
		backgroundColor: Color.gray,
		height:56,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},

	btnConMPrimary: {
		backgroundColor: Color.primary,
		height:42,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},



	btnConMGray: {
		backgroundColor: Color.gray,
		height:42,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},

	btnOutLPrimary: {
		backgroundColor: Color.white,
		height:56,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.primary,
		borderWidth:1,
		borderColor: Color.primary,
	},

	btnMPrimaryContained: {
		backgroundColor: Color.primary,
		height:42,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},

	btnOutMPrimary: {
		backgroundColor: Color.white,
		height:42,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.primary,
		borderWidth:1,
		borderColor: Color.primary,
	},
	btnConSPrimary: {
		backgroundColor: Color.primary,
		height:38,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
		paddingLeft:19,
		paddingRight:19,
	},
	btnOutSGray: {
		backgroundColor: Color.white,
		height:38,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
		borderColor: Color.gray,
		borderWidth:1,
		paddingLeft:19,
		paddingRight:19,
	},
	btnConSqrRed:{
		backgroundColor: Color.red,
		height:47,
		width:47,
		fontSize:14,
		borderRadius:3,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},
	btnConSqrStrongGray:{
		backgroundColor: Color.strong_gray,
		height:47,
		width:47,
		fontSize:14,
		borderRadius:3,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},
	btnOutSPrimary: {
		backgroundColor: Color.white,
		height:38,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
		borderWidth:1,
		borderColor: Color.primary,
		paddingLeft:19,
		paddingRight:19,

	},
	btnConLMidGray: {
		backgroundColor: Color.mid_gray,
		height:56,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},
	btnConSMidGray: {
		backgroundColor: Color.mid_gray,
		height:56,
		fontSize:14,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		color:Color.white,
	},
	chipOutMBlack: {
		backgroundColor: Color.white,
		height:30,
		fontSize:14,
		borderRadius:20,
		justifyContent:'center',
		alignItems:'center',
		color:Color.black,
		borderWidth:1,
		borderColor: Color.strong_gray,
	},
	chipOutMPrimary: {
		backgroundColor: Color.light_blue,
		height:30,
		fontSize:14,
		borderRadius:20,
		justifyContent:'center',
		alignItems:'center',
		color:Color.primary,
		borderWidth:1,
		borderColor: Color.mid_blue,
	},

	labelOutPrimary:{
		backgroundColor: Color.white,
		height:24,
		fontSize:12,
		borderRadius:19,
		justifyContent:'center',
		alignItems:'baseline',
		color:Color.primary,
		borderWidth:1,
		paddingLeft:14,
		paddingRight:14,
		borderColor: Color.primary,
	},

	labelLightBlue:{
		backgroundColor: Color.light_blue,
		height:21,
		fontSize:12,
		borderRadius:4,
		justifyContent:'center',
		alignItems:'baseline',
		color:Color.primary,
		paddingLeft:6,
		paddingRight:6,
	},

	btnSuccess:{
		height:38, lineHeight:38,
		backgroundColor: Color.primary,
		justifyContent:'center', alignItems:'center',
		borderRadius:3, color:Color.white,
		paddingLeft:5, paddingRight:5,
	},
	btnSuccessReverse:{
		height:38, lineHeight:38,
		backgroundColor: Color.white,
		justifyContent:'center', alignItems:'center',
		borderRadius:3, color:Color.white,
		borderWidth:1, borderColor:Color.primary,
		paddingLeft:5, paddingRight:5,
	},
	btnBlack:{
		height:38, lineHeight:38,
		backgroundColor: Color.black,
		justifyContent:'center', alignItems:'center',
		borderRadius:3, color:Color.white,
		paddingLeft:5, paddingRight:5,
	},
  btnBlackReverse:{
    height:38, lineHeight:38,
    backgroundColor: Color.white,
    justifyContent:'center', alignItems:'center',
    borderRadius:3, color:Color.black,
    borderWidth:1,
    paddingLeft:5, paddingRight:5,
  },
	btnGray:{
		height:38, lineHeight:38,
		backgroundColor: Color.black,
		justifyContent:'center', alignItems:'center',
		borderRadius:3, color:Color.white,
		paddingLeft:5, paddingRight:5,
	},
  btnGrayReverse:{
    height:38, lineHeight:38,
    backgroundColor: Color.white,
    justifyContent:'center', alignItems:'center',
    borderRadius:3, color:Color.gray,
    borderColor: Color.gray,
    paddingLeft:5, paddingRight:5,
    borderWidth:1,
  },
	btnMidGray:{
		height:38, lineHeight:38,
		backgroundColor: Color.mid_gray,
		justifyContent:'center', alignItems:'center',
		borderRadius:3, color:Color.white,
		paddingLeft:5, paddingRight:5,
	},
	btnRoundW: {
		height:50, width:50,
		backgroundColor:Color.white,
		justifyContent:'center', alignItems:'center',
		borderRadius:50,
	},

	cardL:{
		overflow:'hidden',
		borderRadius:8,
		borderWidth:1,
		borderColor: Color.mid_gray
	},

	pr: {
		position:"relative",
	},
	posAb: {
		position:"absolute",
	},

	opacity30: {
		opacity:0.3,
	}
});
