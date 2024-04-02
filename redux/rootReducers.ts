import { combineReducers } from 'redux'
import categories from '@/redux/categories/slice'
import login from '@/redux/login/slice'
import navbar from '@/redux/navbar/slice'

const rootReducer = combineReducers({
    login,
    categories,
    navbar
})

export default rootReducer