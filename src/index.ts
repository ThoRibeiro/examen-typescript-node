import { readFileSync } from "fs";

function getStatistics(): number {
  const persons = JSON.parse(readFileSync("./persons.json").toString());
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
