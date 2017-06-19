import {INIT_USER, TOAST, MAP_SET, MAP_DELETE
, queryMyFund_REQUEST, getUsrInfo_REQUEST,lgoin_Request

} from '../util/ActionsType';

export function initUser (visitor) {
  return {
    type: INIT_USER,
    payload: visitor
  }
}

export function toggleToast(toast) {
  return {
    type: TOAST,
    payload: toast
  }
}

export function mapSet(...keyPath) {
  let value = keyPath.pop();
  return {
    type: MAP_SET,
    payload:{keyPath, value}

  }
}

export function mapDelete(...keyPath) {
  return {
    type: MAP_DELETE,
    payload:keyPath
  }
}

export function queryMyFund(data) {
  return {
    types: [...queryMyFund_REQUEST],
    payload:data,
    promise:()=>{
     return FetchPromise("/trade/query/queryMyFund",'post',data)
    }
  };
}

export function getUsrInfo() {
  return {
    types: [...getUsrInfo_REQUEST],
    payload:null,
    promise:()=>{
      return FetchPromise("/trade/query/queryMyFund",'get',null)
    }
  };

}

export function lgoinAction(form) {
  return {
    types:[...lgoin_Request],
    payload:null,
    promise:()=>{
      return FetchPromise("/user/login",'post',form)
    }
  }

}
const FetchPromise = (url,method,data)=>{
  return new Promise((resolve, reject) => {
    var req = new Request(`/api${url}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
      "Content-Type": ' application/json'
    }});
    fetch(req).then(function(res) {
      if(response.status == 200){
        return res.json();
      }
      reject({err:{msg:"后台异常"}})
    }).then((data)=>{
      reject({err:{msg:"后台异常"}})
    }).catch(function(err) {
      reject({err:{msg:"网络异常"}})
    });
  })
}
