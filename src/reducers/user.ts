export const SET_JWT_TOKEN = 'SET_JWT_TOKEN' as const;
export const SET_USER_SETTING = 'SET_USER_SETTING' as const;
export const SET_USER_BASIC_INFO = 'SET_USER_BASIC_INFO' as const;

export const setJwtToken = (jwtToken:string) => ({
  type: SET_JWT_TOKEN,
  payload: jwtToken,
});

export const setUserBasicInfo = (payload:UserBasicInfoType) => ({
  type: SET_USER_BASIC_INFO,
  payload: payload,
});

export const setUserSetting = (payload:UserSettingType) => ({
  type: SET_USER_SETTING,
  payload: payload,
});

type UserSettingType = {
  reminder?: boolean, 
  is_public?: boolean,
}

type UserBasicInfoType = {
  email?: string,
  nick_name?: string,
  birth?: string,
  lang?: string,
  region?: string,
}

type UserInitialType = {
  jwtToken?: string,
  userBasicInfo: UserBasicInfoType,
  userSetting: UserSettingType,
}

const initialState = {
  jwtToken: null,
  userBasicInfo: {
    email:null,
    nick_name:null,
    birth:null,
    lang:'eng',
    region: null,
  },
  userSetting: {
    reminder: false,
    is_public: true,
  }
}

type UserActionType =
  | ReturnType<typeof setJwtToken>
  | ReturnType<typeof setUserBasicInfo>
  | ReturnType<typeof setUserSetting>

const user = (state:UserInitialType = initialState, action:UserActionType) => {
  switch (action.type) {
    case SET_JWT_TOKEN:{
      return {
        ...state,
        jwtToken: action.payload,
      }
    }
    case SET_USER_BASIC_INFO: {
      return {
        ...state,
        userBasicInfo: action.payload,
      }
    }
    case SET_USER_SETTING: {
      return {
        ...state,
        userSetting: action.payload,
      }
    }
    default:
      return state;
  }
};

export default user;