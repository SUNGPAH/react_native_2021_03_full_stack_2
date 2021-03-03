import {
  Platform,
} from 'react-native';

let appVersion 
let storeUrl
if (Platform.OS === "android"){
	appVersion = 1
	storeUrl = "https://play.google.com/store/apps/details?id=com.snowballplus&hl=ko&gl=US"
}else if(Platform.OS == "ios"){
	appVersion = 1
	storeUrl = "https://apps.apple.com/kr/app/ringle/id1509885251"
}

export const STORE_URL = storeUrl;
export const APP_VERSION = appVersion;

export const APP_SERVER_PATH = "http://localhost:3000";
// export const APP_SERVER_PATH = "https://api.turnchat.io";
export const APP_API_PATH = `${APP_SERVER_PATH}/api/v1`;
//adb reverse tcp:3000 tcp:3000
export const defaultImgUrl = "https://d2mkevusy1mb28.cloudfront.net/web/online_study/profile_person.svg"

export const Color = {
	primary: "#98afe7",
	white: "#fff",
	white_secondary: "#fafcff",
	light_gray: "#f7f9ff",
	mid_gray: "#e0e3e9",
	mid_light_gray: "#EDEFF5",
	gray: "#c3c3c3",
	dark_gray: "#939393",
	strong_gray: "#777d92",
	ice: "#f7f9ff",
	black: "#151151",

	light_blue: "#e7f2ff",

	yellow: "#fabd3e",
	red: "#ff7365",
	light_red: "#d51a51",
	mid_blue: "#b2d2ff",
	green: "#00a669"
}
