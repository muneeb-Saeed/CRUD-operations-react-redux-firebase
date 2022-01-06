
import { ADD_ONE } from '../actions/userActions';


//reducer there is only one case ADD_ONE
export default function(state ={}, action) {
      switch(action.type) {
          case ADD_ONE:
            return {
              ...state,
              title:action.title,
              description:action.description,
              published:action.published,
              submitted:action.submitted
            }
          default:{
            return state;
          }
      }
 }
