import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons : Person[] = JSON.parse(readFileSync("./persons.json").toString());
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
