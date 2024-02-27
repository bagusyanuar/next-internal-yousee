import { combineReducers } from 'redux'
import login from '@/redux/login/slice'
import navbar from '@/redux/navbar/slice'

const rootReducer = combineReducers({
    login,
    navbar
})

export default rootReducer