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
    switch (pathname) {
        case ClientPath.dashboard.index:
            value.Title = 'Dashboard'
            value.SubTitle = 'Welcome to yousee internal app'
            break;
        case '/user':
            value.Title = 'User'
            value.SubTitle = 'Manage yousee user account'
            break;
        case ClientPath.category.index:
            value.Title = 'Category'
            value.SubTitle = 'Manage yousee product category'
            break;
        default:
            break;
    }
    return value
}
