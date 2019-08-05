import {GET_TASKS, POST_TASK_START} from './types';
import axios from 'axios';

export const getTasks = () => (dispatch) => {
  axios
    .get('/api/tasks')
    .then(res => (
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    ))
}

export const postTask = task => (dispatch) =>{
  axios
    .post('/api/tasks', task)
    .then(res =>(
      dispatch({
        type:POST_TASK_START,
        payload:res.data
      })
    ))
    .catch(err =>
      console.log(err)
    )
}
