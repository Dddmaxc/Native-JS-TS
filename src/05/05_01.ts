export type ManType = {
  name: string;
  age: number;
};

const people: Array<ManType> = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Alexander Petrow", age: 24 },
  { name: "Dmitry Sidorow", age: 18 },
];

let devs2 = people.map((m) => {
  const [firstName, lastName] = m.name.split(" ");
  return {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName,
    lastName,
  };
});

const dimychTransormator = (man: ManType) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
});

const devs1 = [
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov",
  },
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Alexander",
    lastName: "Petrow",
  },
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Dmitry",
    lastName: "Sidorow",
  },
];

const devs3 = people.map((m) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: m.name.split(" ")[0],
  lastName: m.name.split(" ")[1],
}));

const devs4 = [
  dimychTransormator(people[0]),
  dimychTransormator(people[1]),
  dimychTransormator(people[2]),
];

const messages = people.map(
  (m) => `Hello ${m.name.split(" ")[0]}. Welcome to IT-Incubator`
);

export const createGreetingMessage = (people: Array<ManType>) => {
  return people.map(
    (m) => `Hello ${m.name.split(" ")[0]}. Welcome to IT-Incubator`
  );
};
