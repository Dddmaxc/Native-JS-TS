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
