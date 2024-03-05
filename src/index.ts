import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons : Person[] = JSON.parse(readFileSync("./persons.json").toString());
  let maxAge: number = 0;

  for (const person of persons) {
    if (person.age > maxAge) {
      maxAge = person.age;
    }
  }

  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
