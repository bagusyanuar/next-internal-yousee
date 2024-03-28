import { Category } from "@/model/category";

export const transformToCategories = (data: Array<any>): Array<Category> => {
    return data.map((v) => {
        return {
            ID: v['id'] as number,
            Name: v['name'] as string,
            Icon: v['icon'] as string | null
        }
    })
}