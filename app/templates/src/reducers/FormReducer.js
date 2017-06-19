import {Map} from 'immutable';
import {MAP_DELETE,MAP_SET} from '../util/ActionsType';


export default function (state = Map({}),actions ) {
  const {payload} = actions;
  switch (actions.type){
    case MAP_SET:
      if (typeof actions.value === 'function') {
        return state.updateIn(payload.keyPath, payload.value);
      } else {
        return state.setIn(payload.keyPath, payload.value);
      }
    case MAP_DELETE:
      return state.deleteIn(payload);
    default:
      return state
  }
}
