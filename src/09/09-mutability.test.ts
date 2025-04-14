function increaseAge(u: UserType) {
  u.age++;
}

type UserType = {
  name: string;
  age: number;
  address: { title: string };
};
test("reference type test", () => {
  let user: UserType = {
    name: "Naruto",
    age: 22,
    address: { title: "Konoha" },
  };

  increaseAge(user);

  expect(user.age).toBe(23);
});

test("array test", () => {
  let users = [
    { name: "Naruto", age: 22 },
    { name: "Saske", age: 23 },
  ];

  let admins = users;

  admins.push({ name: "Sakura", age: 21 });

  expect(users[2]).toEqual({ name: "Sakura", age: 21 });
});

test("value type test", () => {
  let userCount = 100;

  let adminsCount = userCount;

  adminsCount = adminsCount + 1;

  expect(adminsCount).toEqual(101);
});

test("reference type test", () => {
  const address = {
    title: "Konoha",
  };

  let user: UserType = {
    name: "Naruto",
    age: 22,
    address: address,
  };

  // let addr = user.address

  let user2: UserType = {
    name: "Inno",
    age: 21,
    address: address,
  };

  address.title = "Kiev";

  expect(user.address.title).toBe("Kiev");
});

test("reference type test", () => {
  const address = {
    title: "Konoha",
  };

  let user: UserType = {
    name: "Naruto",
    age: 22,
    address: address,
  };

  let user2: UserType = {
    name: "Inno",
    age: 21,
    address: address,
  };

  const users = [user, user2, { name: "Itachi", age: 32, address: address }];

  users[0].name = "Kakashi"

  expect(users[0].name).toBe("Kakashi");
});
