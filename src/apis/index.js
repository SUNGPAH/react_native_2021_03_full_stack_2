import {APP_API_PATH, APP_SERVER_PATH} from '../Constant';
import store from '../config/store';

//access the value here..!
export const getToken = () => {
  let jwtToken 
  try{
    jwtToken = store.getState().user.jwtToken
  }catch(e){
    jwtToken = null
  }

  return jwtToken
}

export function getPusherUrl() { 
  return APP_SERVER_PATH + '/pusher/auth_new'
}

export const request = async(options, headerData, contentType) => {
  let headers = new Headers({})
  if(contentType === "image"){
  }else{
    headers.append("Content-Type", "application/json");
  }

  let bearer = null;

  if(headerData) {
    headers.append('Password', headerData);
  }

  const jwtToken = getToken()

  if(jwtToken) {
    bearer = 'Bearer ' + jwtToken;
    headers.append('Authorization', bearer);
  } 
      
  //Authorization

  const defaults = {headers: headers};
  options = Object.assign({}, defaults, options);

  return await fetch(APP_API_PATH + options.url, options)
    .then(response =>
      response.json().then(json => {
        if(!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch(e => {
      console.log(e);
    })
}
