import { combineReducers } from 'redux'
import login from '@/redux/login/slice'

const rootReducer = combineReducers({
    login: login
})

export default rootReducer