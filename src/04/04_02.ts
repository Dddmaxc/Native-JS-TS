import { GovernmnetBuildingsType } from './../02/02_02';
import { CityType, HousesType } from "../02/02_02";

export function demolishHousesOnTheStreet (city: CityType, street: string) {
    return city.houses =  city.houses.filter(h => h.address.street.title !== street )
}

export function getBuildingsWithStaffCountGreaterThen (buildings: Array<GovernmnetBuildingsType>,  staffCount: number) {
    return buildings.filter(b => b.staffCount > staffCount)
}
  