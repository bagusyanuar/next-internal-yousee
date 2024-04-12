import { ClientPath } from '@/lib/path'

export type TNavbarTitle = {
    Title: string
    SubTitle: string
}

export function useNavbarTitle(pathname: string): TNavbarTitle {
    let value: TNavbarTitle = {
        Title: '',
        SubTitle: ''
    }
    if (pathname.startsWith('/dashboard')) {
        value.Title = 'Dashboard'
        value.SubTitle = 'Welcome to yousee internal app'
    }
    
    
    if (pathname.startsWith('/category')) {
        value.Title = 'Category'
        value.SubTitle = 'Manage yousee product category'
    }
    
    if (pathname.startsWith('/vendor')) {
        value.Title = 'Vendor'
        value.SubTitle = 'Manage yousee product vendor'
    }
    
    // switch (pathname) {
    //     case ClientPath.dashboard.index:
    //         value.Title = 'Dashboard'
    //         value.SubTitle = 'Welcome to yousee internal app'
    //         break;
    //     case '/user':
    //         value.Title = 'User'
    //         value.SubTitle = 'Manage yousee user account'
    //         break;
    //     case ClientPath.category.index:
    //         value.Title = 'Category'
    //         value.SubTitle = 'Manage yousee product category'
    //         break;
    //     case ClientPath.category.add:
    //         value.Title = 'Category'
    //         value.SubTitle = 'Create new yousee product category'
    //         break;
    //     default:
    //         break;
    // }
    return value
}
