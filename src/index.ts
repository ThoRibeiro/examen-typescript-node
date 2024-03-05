import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
  taille?: number;
}

interface Statistics {
  ageMoyen: number;
  tailleMoyenne: number;
}

function getStatistics(): Statistics | null {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  const firstPerson = persons[0];
  if (!firstPerson ||
      !Object.hasOwnProperty.call(firstPerson, 'age') ||
      !Object.hasOwnProperty.call(firstPerson, 'height') ||
      typeof firstPerson.age !== 'number' ||
      typeof firstPerson.height !== 'number') {
    console.error("Erreur: Les données du fichier persons.json ne sont pas correctement formées.");
    return null;
  }

  let totalAge = 0;
  let totalHeight = 0;

  for (const person of persons) {
    totalAge += person.age;
    if (person.taille !== undefined) {
      totalHeight += person.taille;
    } else {
      totalHeight += person.height;
    }
  }

  return {
    ageMoyen: totalAge / persons.length,
    tailleMoyenne: totalHeight / persons.length
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
