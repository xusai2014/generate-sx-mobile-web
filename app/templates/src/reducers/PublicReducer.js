import {INIT_USER} from '../util/ActionsType';
const initialState ={
  visitor:{},
}

export default function (state = initialState,actions ) {
  switch (actions.type){
    case INIT_USER:
      const {payload} = actions;
      return {
        ...state,
        visitor:payload
      }
    default:
      return state
  }
}
