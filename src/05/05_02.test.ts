import { CityType } from "../02/02_02";
import {
  createMessages,
  getStreetsTitlesOfGovermentsBuildings,
  getStreetsTitlesOfHourse,
} from "./05_02";

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

test("List of streets titles of goverments buildings", () => {
  let streetsNames = getStreetsTitlesOfGovermentsBuildings(
    city.governmnetBuildings
  );
  expect(streetsNames.length).toBe(2);
  expect(streetsNames[0]).toBe("Central Str");
  expect(streetsNames[1]).toBe("South Str");
});

test("List of streets titles", () => {
  let streets = getStreetsTitlesOfHourse(city.houses);

  expect(streets.length).toBe(3);
  expect(streets[0]).toBe("White street");
  expect(streets[1]).toBe("Happy street");
  expect(streets[2]).toBe("Happy street");
});

test("create greetings messages for streets", () => {
  let messages = createMessages(city.houses);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello guys from White street")
  expect(messages[1]).toBe("Hello guys from Happy street")
  expect(messages[2]).toBe("Hello guys from Happy street")
  
});
