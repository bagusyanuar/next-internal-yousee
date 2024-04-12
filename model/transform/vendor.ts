import { Vendor } from "@/model/vendor";

export const transformToVendors = (data: Array<any>): Array<Vendor> => {
    return data.map((v) => {
        return {
            ID: v['id'] as number,
            Name: v['name'] as string,
            Brand: v['brand'] as string,
            Address: v['address'] as string,
            Email: v['email'] as string,
            Phone: v['phone'] as string,
            PICName: v['picName'] as string,
            PICPhone: v['picPhone'] as string,
            LastSeen: v['last_seen'] ? v['last_seen'] as string : null,
            CreatedAt: v['created_at'] ? v['created_at'] as string : null,
            UpdatedAt: v['updated_at'] ? v['updated_at'] as string : null
        }
    })
}