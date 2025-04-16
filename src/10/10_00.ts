
export type HairUserType = {
  name: string;
  hair: number;
  address: { city: string; house: number };
};

export type LaptopType = {
  title: string;
};

export type UserWithLaptop = HairUserType & {
  laptop: LaptopType;
};

export type UserWithBooks = HairUserType & {
  books: Array<string>;
};

export type WithCompanyType = {
  company: Array<{ id: number; title: string }>;
};
type CompanyType = {
  id: number;
  title: string;
};

type CompaniesType = {
  [userName: string]: CompanyType[];
};

export function heirDresser(u: HairUserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power,
  };
  return copy;
}

export let moveUser = (u: UserWithLaptop, city: string) => ({
  ...u,
  address: {
    ...u.address,
    city: city,
  },
});

export let upgradeUserLaptop = (u: UserWithLaptop, laptop: string) => ({
  ...u,
  laptop: {
    ...u.laptop,
    title: laptop,
  },
});

export function moveUserToOtherHouse(
  u: UserWithLaptop & UserWithBooks,
  house: number
) {
  const copy = {
    ...u,
    address: {
      ...u.address,
      house: house,
    },
  };
  return copy;
}

export function aadNewBooksToUser(
  u: UserWithLaptop & UserWithBooks,
  books: Array<string>
) {
  const copy = {
    ...u,
    books: [...u.books, ...books],
  };
  return copy;
}
export function upDateBook(
  u: UserWithLaptop & UserWithBooks,
  oldBook: string,
  newBook: string
) {
  const copy = {
    ...u,
    books: [...u.books.map((book) => (book === oldBook ? newBook : book))],
  };

  return copy;
}

export function removeBook(u: UserWithLaptop & UserWithBooks, oldBook: string) {
  const copy = {
    ...u,
    books: u.books.filter((book) => book !== oldBook),
  };

  return copy;
}

export function upDateCompany(u: WithCompanyType,id: number, newTitle: string) {
  let copy: WithCompanyType = {
    ...u,
   company: u.company.map(c => c.id === id ? {...c, title: newTitle} : c)
  };

  return copy;
}

export let upDateCompanyTwo = (
  companies: CompaniesType,
  userName: string,
  idCompany: number,
  newTitle: string
) => {
  let copyCompanies = { ...companies };

  copyCompanies[userName] = copyCompanies[userName].map(c =>
    c.id === idCompany ? { ...c, title: newTitle } : c
  );

  return copyCompanies;
};


