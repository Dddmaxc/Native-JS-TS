import { use } from "react";
import {
  aadNewBooksToUser,
  heirDresser,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  upDateBook,
  upDateCompany,
  upDateCompanyTwo,
  upgradeUserLaptop,
  UserWithBooks,
  UserWithLaptop,
  WithCompanyType,
} from "./10_00";

test("reference type test", () => {
  let user: UserWithLaptop = {
    name: "Naruto",
    hair: 22,
    address: { city: "Konoha", house: 12 },
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

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptop & UserWithBooks = {
    name: "Naruto",
    hair: 22,
    address: {
      city: "Konoha",
      house: 12,
    },
    laptop: {
      title: "Acer",
    },
    books: ["css", "react", "js"],
  };

  let usersCopy = moveUserToOtherHouse(user, 99);

  expect(user.books).toBe(usersCopy.books);
  expect(user).not.toBe(usersCopy)
  expect(user.address).not.toBe(usersCopy.address)
  expect(user.laptop).toBe(usersCopy.laptop)
  expect(usersCopy.address.house).toBe(99)
});

test("add new books to user", () => {
  let user: UserWithLaptop & UserWithBooks = {
    name: "Naruto", 
    hair: 22,
    address: {
      city: "Konoha",
      house: 12,
    },
    laptop: {
      title: "Acer",
    },
    books: ["css", "react", "js"],
  };

  let usersCopy = aadNewBooksToUser(user, ["ts", "rest API"]);

  expect(user.books).not.toBe(usersCopy.books);
  expect(user).not.toBe(usersCopy)
  expect(user.address).toBe(usersCopy.address)
  expect(user.laptop).toBe(usersCopy.laptop)
  expect(user.books).toEqual(["css", "react", "js"])
  expect(usersCopy.books).toEqual(["css", "react", "js", "ts", "rest API"]);
});

test("up date js to js-Native books", () => {
  let user: UserWithLaptop & UserWithBooks = {
    name: "Naruto", 
    hair: 22,
    address: {
      city: "Konoha",
      house: 12,
    },
    laptop: {
      title: "Acer",
    },
    books: ["css", "react", "js"],
  };

  let usersCopy = upDateBook(user,"js","js_Native");

  expect(user.books).not.toBe(usersCopy.books);
  expect(user).not.toBe(usersCopy)
  expect(user.address).toBe(usersCopy.address)
  expect(user.laptop).toBe(usersCopy.laptop)
  expect(user.books).toEqual(["css", "react", "js"])
  expect(usersCopy.books[2]).toBe("js_Native")
  expect(usersCopy.books.length).toBe(3);
});
test("remove js book", () => {
  let user: UserWithLaptop & UserWithBooks = {
    name: "Naruto", 
    hair: 22,
    address: {
      city: "Konoha",
      house: 12,
    },
    laptop: {
      title: "Acer",
    },
    books: ["css", "react", "js"],
  };

  let usersCopy = removeBook(user,"js");

  expect(user.books).not.toBe(usersCopy.books);
  expect(user).not.toBe(usersCopy)
  expect(user.address).toBe(usersCopy.address)
  expect(user.laptop).toBe(usersCopy.laptop)
  expect(usersCopy.books.length).toBe(2);
});

test("upDate company", () => {
  let user: UserWithLaptop & WithCompanyType = {
    name: "Naruto", 
    hair: 22,
    address: {
      city: "Konoha",
      house: 12,
    },
    laptop: {
      title: "Acer",
    },
    company: [
      {id: 1, title: "Nike"},
      {id: 2, title: "Adidas"},
      {id: 3, title: "Nvideo"}
    ],
  };

let copy = upDateCompany(user, 1, "Nvidia") as  UserWithLaptop & WithCompanyType

expect(user).not.toBe(copy)
expect(user.company).not.toBe(copy.company)
expect(copy.company[2].title).not.toBe("Nvidia")
});

test("Up date company", () => {

let companies = {
  "Denys": [{id: 1, title: "Nike"}, {id: 2, title: "adidas"}],
  "REY": [{id: 1, title: "Google"}]
}
let copy = upDateCompanyTwo(companies,"Denys", 2, "Google") 
expect(copy["Denys"]).not.toBe(companies["Denys"])
expect(copy["REY"]).toBe(companies["REY"]) 
expect(copy["Denys"][1].title).toBe("Google")

});
