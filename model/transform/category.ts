import { Category } from "@/model/category";

export const transformToCategories = (data: Array<any>): Array<Category> => {
    return data.map((v) => {
        // const icon: string | null = v['icon'] as string | null
        // let iconPath = `/assets/static/no-image.png`
        // if (icon !== null) {
        //     iconPath = icon
        // }
        return {
            ID: v['id'] as number,
            Name: v['name'] as string,
            Icon: v['icon'] as string | null
        }
    })
}