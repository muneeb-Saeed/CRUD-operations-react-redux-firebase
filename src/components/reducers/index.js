import { createStore ,combineReducers } from 'redux';
import reducer from './reducers';

//combining reducers as one rootReducer, in this case there is only one reducers
const rootReducer = combineReducers({
    reducer
})

//creating store and passing rootReducer to store
const store = createStore(
    rootReducer
)
export default store;