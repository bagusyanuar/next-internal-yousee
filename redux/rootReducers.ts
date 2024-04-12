import { combineReducers } from 'redux'
import categories from '@/redux/categories/slice'
import vendor from '@/redux/vendor/slice'
import login from '@/redux/login/slice'
import navbar from '@/redux/navbar/slice'

const rootReducer = combineReducers({
    login,
    categories,
    vendor,
    navbar
})

export default rootReducer