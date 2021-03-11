export const SET_DAILY_QUESTION = 'SET_DAILY_QUESTION' as const;
export const SET_DAILY_MEMO = 'SET_DAILY_MEMO' as const;
export const SET_OTHERS_MEMOS = 'SET_OTHERS_MEMOS' as const;
export const UPDATE_OTHERS_MEMO = 'UPDATE_OTHERS_MEMO' as const;

export const setDailyQuestion = (dailyQuestion:any) => ({
  type: SET_DAILY_QUESTION,
  payload: dailyQuestion,
});

export const setDailyMemo = (dailyMemo:DailyMemoType) => ({
  type: SET_DAILY_MEMO,
  payload: dailyMemo,
})

export const setOthersMemos = (list:any) => ({
  type: SET_OTHERS_MEMOS,
  payload: list
})

export const updateOthersMemo = (payload:any) => ({
  type: UPDATE_OTHERS_MEMO,
  payload: payload,
})

type DailyQuestionType = {
	id: number,
	content: string,
}

type DailyMemoType = {
  memoId: number,
  questionId: number,
	content: string,
	isPublic: boolean,
}

export type OthersMemoType = {
  id: number,
  content: string,
	question_id: number,
	likesCount: number,
	user: {
		nickName: string
	},
  doILike: boolean,
}

type OthersMemosType = OthersMemoType[]

type CalendarType= {
	year: number,
	month: number,
	monthStr: string
	markingList: number[],
}

type MemoInitialType = {
	dailyQuestion?: DailyQuestionType,
	dailyMemo?: DailyMemoType,
	othersMemos?: OthersMemosType,
  calendar?: CalendarType,
}

const initialState = {
  dailyQuestion: null,
  dailyAnswer: null,
  othersMemos: null,
  calendar: null, //+ 
}

type MemoActionType = 
  | ReturnType<typeof setDailyQuestion>
  | ReturnType<typeof setDailyMemo>
  | ReturnType<typeof setOthersMemos>
  | ReturnType<typeof updateOthersMemo>

const memo = (state: MemoInitialType = initialState, action:MemoActionType) => {
  switch (action.type) {
    case SET_DAILY_QUESTION:{
      return {
        ...state,
        dailyQuestion: action.payload,
      }
    }
    case SET_DAILY_MEMO:{
      return {
        ...state,
        dailyMemo: action.payload,
      }
    }

    case SET_OTHERS_MEMOS:{
      //여기서 칼럼을 통일하는게 중요한디
      return {
        ...state,
        othersMemos: action.payload,
      }
    }

    case UPDATE_OTHERS_MEMO: {
      const memoId = action.payload.id
      const likeStatus = action.payload.doILike
      const copy = [...state.othersMemos]
      const index = copy.findIndex(el => el.id === memoId)

      if(index !== -1) {
        copy[index].doILike = likeStatus;
        if( likeStatus ){
          copy[index].likesCount = copy[index].likesCount + 1;
        }else{
          copy[index].likesCount = copy[index].likesCount - 1;
        }
      }

      return {
        ...state,
        othersMemos: copy,
      }
    }

    default:
      return state;
  }
};

export default memo;