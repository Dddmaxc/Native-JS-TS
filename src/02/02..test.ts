import { CityType } from "./02_02";

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

test("test city should contains 3 houses", () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("White street");

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe("Happy street");

  expect(city.houses[2].buildedAt).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(101);
  expect(city.houses[2].address.street.title).toBe("Happy street");
});

test("test city should contains hospital and fire station", () => {
  expect(city.governmnetBuildings.length).toBe(2);

  expect(city.governmnetBuildings[0].type).toBe("HOSPITAL");
  expect(city.governmnetBuildings[0].budget).toBe(2000000);
  expect(city.governmnetBuildings[0].staffCount).toBe(200);
  expect(city.governmnetBuildings[0].address.street.title).toBe("Central Str");

  expect(city.governmnetBuildings[1].type).toBe("FIRE-STATION");
  expect(city.governmnetBuildings[1].budget).toBe(5000000);
  expect(city.governmnetBuildings[1].staffCount).toBe(1000);
  expect(city.governmnetBuildings[1].address.street.title).toBe("South Str");
});
