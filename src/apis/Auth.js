import {request} from '.';

export const signInAPI = (payload) => {
  return request({
    url:'/authenticate/signin',
    method:'POST',
    body:JSON.stringify(payload)
  }).then((data) => {
    console.log('signin?');
    console.log(data);
    return data
  }, false)
}

export const postSignUpAPI = (payload) => {
  return request({
    url:'/authenticate/complete_signup',
    method:'POST',
    body:JSON.stringify(payload)
  }).then((data) => {
    return data;
  }, false)
}

export const registerTokenAPI = (registrationToken) => {
  return request({
    url:'/user/account/update/register_token',
    method:'POST',
    body:JSON.stringify({registration_token:registrationToken})
  }).then((data) => {
    return data;
  }, false)
}

export const getReferralCheckAPI = (referralCode) => {
  return request({
    url:`/authenticate/referral/${referralCode}`,
    method:'GET',
  }, false)
}

export const getUserInfoAPI = (jwtToken) => {
  return request({
    url:'/authenticate/info',
    method:'GET',
  }, jwtToken).then((data) => {
    return data;
  })
}

export const errorAPI = (payload) => {
  return request({
    url:'/error',
    method:'POST',
    body:JSON.stringify(payload)
  }).then((data) => {
    return data;
  }, false)
}