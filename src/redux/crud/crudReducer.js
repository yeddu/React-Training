import { ADD_FORM_DATA , DELETE_ROW} from './crudTypes'

const crudReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FORM_DATA: return state.concat([action.data]);
    case DELETE_ROW:
      return state.filter((list)=>list.id !== action.id);

    default: return state
  }
}

export default crudReducer