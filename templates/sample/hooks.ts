import type { AppDispatch } from '@/redux/store'
import {
    NavbarState,
    SetTitle,
    SetSubTitle
} from '@/redux/navbar/slice'



function useNavbar(dispatch: AppDispatch, title: string) {
    console.log(title);
    dispatch(SetTitle(title))
}

export {
    useNavbar
}