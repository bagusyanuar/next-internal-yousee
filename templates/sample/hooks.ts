import type { AppDispatch } from '@/redux/store'
import {
    NavbarState,
    SetTitle,
    SetSubTitle
} from '@/redux/navbar/slice'



function useNavbar(dispatch: AppDispatch, title: string, subTitle: string) {
    dispatch(SetTitle(title))
    dispatch(SetSubTitle(subTitle))
}

export {
    useNavbar
}