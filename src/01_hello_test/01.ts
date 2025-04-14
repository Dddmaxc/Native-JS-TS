export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export let splitIntoWords = (sentence: string) => {

  let words = sentence.split(" ")
  return words.filter(w => w !== "" && w !== "-")
   .map(w => w
    .replace("!", "")
    .replace(".", "")
    .replace(",", "")
   )
};


 