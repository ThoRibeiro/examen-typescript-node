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

  // Vérifier si le premier élément du tableau a les propriétés attendues
  if (persons.length > 0 && !Object.hasOwnProperty.call(persons[0], 'age') && !Object.hasOwnProperty.call(persons[0], 'height')) {
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
