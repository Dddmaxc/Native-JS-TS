test("", () => {
    let country: countryType = {
        Ukraine: "Kiev",
        Japan: "Tokio",
        Netherland: "Amsterdam",
        Poland: "Warsaw",
        Germany: "Berlin",
      };
      country["Poland"] = "Kiev";

      expect(country["Poland"]).toBe("Kiev")
  });