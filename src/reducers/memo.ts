export const SET_DAILY_QUESTION = 'SET_DAILY_QUESTION' as const;
export const SET_DAILY_MEMO = 'SET_DAILY_MEMO' as const;
export const SET_OTHERS_MEMOS = 'SET_OTHERS_MEMOS' as const;
export const UPDATE_OTHERS_MEMO = 'UPDATE_OTHERS_MEMO' as const;
export const SET_CALENDAR_CURRENT_DATE = 'SET_CALENDAR_CURRENT_DATE' as const;
export const SET_CALENDAR_MONTH = 'SET_CALENDAR_MONTH' as const;
export const SET_CALENDAR_YEAR = 'SET_CALENDAR_YEAR' as const;
export const SET_CALENDAR_MARKED_DATES = 'SET_CALENDAR_MARKED_DATES' as const;

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

export const setCalendarCurrentDate = (payload:any) => ({
  type: SET_CALENDAR_CURRENT_DATE,
  payload: payload,
})

export const setCalendarYear = (year:number) => ({
  type: SET_CALENDAR_YEAR,
  payload: year,
})

export const setCalendarMonth = (month:number) => ({
  type: SET_CALENDAR_MONTH,
  payload: month,
})

export const setCalendarMarkedDates = (dates: any) => ({
  type: SET_CALENDAR_MARKED_DATES,
  payload: dates,
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
  currentDate: string, //2021-03-03
	markedDates: any[],
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

  | ReturnType<typeof setCalendarCurrentDate>
  | ReturnType<typeof setCalendarYear>
  | ReturnType<typeof setCalendarMonth>
  | ReturnType<typeof setCalendarMarkedDates>

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

    case SET_CALENDAR_CURRENT_DATE: {
      const cpCalendar = {...state.calendar}
      cpCalendar.currentDate = '2021-03-25'
      return {
        ...state,
        calendar: cpCalendar,
      }
    }

    case SET_CALENDAR_YEAR : {
      const cpCalendar = {...state.calendar}
      cpCalendar.year = action.payload 
      return {
        ...state,
        calendar: cpCalendar,
      }
    }

    case SET_CALENDAR_MONTH : {
      const cpCalendar = {...state.calendar}
      cpCalendar.month = action.payload 
      return {
        ...state,
        calendar: cpCalendar,
      }
    }

    case SET_CALENDAR_MARKED_DATES: {
      const cpCalendar = {...state.calendar}
      cpCalendar.markedDates = action.payload 
      return {
        ...state,
        calendar: cpCalendar,
      }

    }

    default:
      return state;
  }
};

export default memo;