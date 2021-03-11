import {request} from '.';

export const getQuestionAPI = (yyyymmdd) => {
  return request({
    url:`/memo?yyyymmdd=${yyyymmdd}`,
    method:'GET',
  }).then((data) => {
    return data
  })
}

export const getOthersMemoAPI = (questionId) => {
  return request({
    url:`/memo/list?question_id=${questionId}`,
    method:'GET',
  }).then((data) => {
    return data
  })
}

export const memoCreateAPI = (payload) => {
  return request({
    url:'/memo/create',
    method:'POST',
    body:JSON.stringify(payload)
  }).then((data) => {
    console.log(data);
    return data
  })
}

export const memoLikeAPI = (memoId) => {
  return request({
    url:'/memo/like',
    method:'POST',
    body:JSON.stringify({id: memoId})
  }).then((data) => {
    console.log(data);
    return data
  })
}

export const memoUnLikeAPI = (memoId) => {
  return request({
    url:'/memo/unlike',
    method:'POST',
    body:JSON.stringify({id: memoId})
  }).then((data) => {
    console.log(data);
    return data
  })
}

export const getCalendarAPI = (year, month) => {
  return request({
    url:`/memo/calendar?year=${year}&month=${month}`,
    method:'GET',
  }).then((data) => {
    return data
  })
}