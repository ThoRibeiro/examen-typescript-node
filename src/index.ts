import { readFileSync } from "fs";

interface Person {
  age: number;
  height?: number;
  taille?: number;
}

interface Statistics {
  ageMoyen: number;
  tailleMoyenne: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  let totalAge = 0;
  let totalHeight = 0;

  for (const person of persons) {
    totalAge += person.age;
    totalHeight += person.height;
  }

  return { ageMoyen: totalAge / persons.length,
    tailleMoyenne: totalHeight / persons.length, };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
