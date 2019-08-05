import {GET_TASKS, POST_TASK_START} from '../actions/types';

const initialState = {
  tasks:[],
  fetching:false,
  fetched:true,
  error:null
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_TASKS:
      return{
        ...state,
        tasks:action.payload
      }
    case POST_TASK_START:
      return{
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    default:
      return state
  }
}
