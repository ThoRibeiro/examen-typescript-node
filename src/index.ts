import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  let totalAge = 0;
  let totalHeight = 0;

  for (const person of persons) {
    totalAge += person.age;
    totalHeight += person.height;
  }

  const meanAge = totalAge / persons.length;
  const meanHeight = totalHeight / persons.length;

  return { meanAge, meanHeight };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
