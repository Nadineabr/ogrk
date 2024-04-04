import { EstateType } from "domains/common/commonEnums"

export interface Estates {
    estates: Estate[]
}

export interface Estate {
    id: number
    address: string
    city: string
    type: EstateType
    price: number
}