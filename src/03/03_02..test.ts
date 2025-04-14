import { CityType, GovernmnetBuildingsType } from "../02/02_02";
import { addMoneyToBudged, repairHouse, toFireStaff, toHireStaff,  } from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New york",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: { number: 101, street: { title: "Happy street" } },
      },
    ],
    governmnetBuildings: [
      {
        type: "HOSPITAL",
        budget: 2000000,
        staffCount: 200,
        address: {
          street: { title: "Central Str" },
        },
      },
      {
        type: "FIRE-STATION",
        budget: 5000000,
        staffCount: 1000,
        address: {
          street: { title: "South Str" },
        },
      },
    ],
    citizensNumber: 1000000,
  };
});

test("Budget should be changed for HOSPITAL", () => {

  addMoneyToBudged(city.governmnetBuildings[0], 1000000)

  expect(city.governmnetBuildings[0].budget).toBe(3000000)
})

test("Budget should be changed for FIRE-STATION", () => {

  addMoneyToBudged(city.governmnetBuildings[1], -1000000)

  expect(city.governmnetBuildings[1].budget).toBe(4000000)
})

test("Houses should be repaired", () => {

  repairHouse(city.houses[1])

  expect(city.houses[1].repaired).toBeTruthy()
})

test("Staff should be increased", () => {

  toFireStaff(city.governmnetBuildings[0], 20);
  
  expect(city.governmnetBuildings[0].staffCount).toBe(180);
});

test("Staff should be repaired", () => {

  toHireStaff(city.governmnetBuildings[0], 20);
  
  expect(city.governmnetBuildings[0].staffCount).toBe(220);
});
