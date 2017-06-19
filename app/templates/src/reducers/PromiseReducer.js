import {queryMyFund_REQUEST,getUsrInfo_REQUEST, lgoin_Request} from '../util/ActionsType';
import {isLogin,setUserInfo, clearUserInfo} from '../util/UserStatus';
const initialState ={
  errMsg:'',
  myFund:{},
  certification:false,
  islogin:isLogin,
  request:false,
};

export default function (state = initialState,actions ) {

  switch (actions.type){
    case queryMyFund_REQUEST[1]:
      return {
        ...state,
        myFund:actions.result
      };
    case getUsrInfo_REQUEST[1]:
      return {
        ...state,
        certification:actions.result,
      };
    case lgoin_Request[1]:
      if(actions.result.code == '0000'){
        setUserInfo();
      }
      return {
        ...state,
          isLogin:true,
          request:false,
      };
    case 'REQUEST':
      return {
        ...state,
        request:true,
      }
    case 'FAILURE':
      if(actions.error.code == '1000'){
        clearUserInfo();
        return;
      }
      return {
        ...state,
        errMsg:actions.error.msg,
        request:false,
      };
    default:
      return state
  }
}
