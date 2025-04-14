import { use } from "react";
import { HairUserType, heirDresser, moveUser, upgradeUserLaptop, UserWithLaptop } from "./10_00";

test("reference type test", () => {
  let user: UserWithLaptop = {
    name: "Naruto",
    hair: 22,
    address: {city: "Konoha", house: 12 },
    laptop: { title: "Acer" },
  };

  const awesomeUser = heirDresser(user, 2);

  expect(awesomeUser.hair).toBe(11);
  expect(user.hair).toBe(22);
  expect(user.address).toBe(user.address);
});

test("change address", () => {
  let user: UserWithLaptop = {
    name: "Naruto",
    hair: 22,
    address: { city: "Konoha", house: 12 },
    laptop: { title: "Acer" },
  };

  let movedUser = moveUser(user, "Kiev");

  expect(user).not.toBe(movedUser);
  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.city).toBe("Kiev");
});

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptop = {
      name: "Naruto",
      hair: 22,
      address: { city: "Konoha", house: 12 },
      laptop: { title: "Acer" },
    };
  
    let movedUser = upgradeUserLaptop(user, "Macbook");
  
    expect(user.laptop.title).toBe("Acer");
    expect(movedUser.laptop.title).toBe("Macbook");
  
    expect(user.laptop).not.toBe(movedUser.laptop); 
    expect(user).not.toBe(movedUser); 
  });
  
