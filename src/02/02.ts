type AdressType = {
  streetTitle: string;
  city: {title: string, countryTitle: string }
};

type CityType = {
  title: "Minsk";
  countryTitle: string;
};

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AdressType;
  technologies: Array<TechnologiesType>
};

const student = {
  id: 1,
  name: "Naruto",
  age: 20,
  isActive: false,
  address: {
    streetTitle: "Watermanstraat 30",
    city: {
      title: "Minsk",
      countryTitle: "Netherland",
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "React",
    },
  ],
};

console.log(student.name);
console.log(student.age);
console.log(student.address.city.title);
console.log(student.technologies[0].title);
