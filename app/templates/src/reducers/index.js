import { combineReducers} from 'redux';
import  PublicReducer  from './PublicReducer';
import  GlobalReducer  from './GlobalReducer';
import  FormReducer  from './FormReducer';
import  PromiseReducer  from './PromiseReducer';

const mainReducer = combineReducers({
  PublicReducer,
  GlobalReducer,
  FormReducer,
  PromiseReducer,
});

export default  mainReducer;

