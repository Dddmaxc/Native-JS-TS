type countryType = {
  [key: string]: string;
};

let country: countryType = {
  Ukraine: "Kiev",
  Japan: "Tokio",
  Netherland: "Amsterdam",
  Poland: "Warsaw",
  Germany: "Berlin",
};

console.log(country["Japan"]);
country["Brazil"] = "Brasília";
console.log(country);
country["Poland"] = "Kiev";
console.log(country);       
delete country["Poland"];
