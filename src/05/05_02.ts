import { GovernmnetBuildingsType, HousesType, StreetType } from "../02/02_02";

export let getStreetsTitlesOfGovermentsBuildings = (
  streetNames: Array<GovernmnetBuildingsType>
) => {
  return streetNames.map((n) => n.address.street.title);
};

export let getStreetsTitlesOfHourse = (streetNames: Array<HousesType>) => {
  return streetNames.map((n) => n.address.street.title);
};

export let createMessages = (message: Array<HousesType>) => {
    return message.map(m => `Hello guys from ${m.address.street.title}`)
};
