export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType 
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmnetBuildings: Array<GovernmnetBuildingsType>
    citizensNumber: number
}
export type GovernmnetBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: StreetGovernmnetBuildingsType
}

export type StreetGovernmnetBuildingsType = {
    street: {title: string}
}