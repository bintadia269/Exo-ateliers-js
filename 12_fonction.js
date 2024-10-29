// Écriture de la fonction
function estPair(nombre) {
  if (nombre % 2 == 0) {
    return  true;
  } else {
    return false;
  }
}

// Appel de la fonction et affichage des résultats
console.log(estPair(4));
console.log(estPair(3));

//Utilisation d'une fonction pour vérifier si les nombres de 1 à 10 sont pairs.
for (let z = 1; z <= 10; z++) {
    console.log(z +': '+ estPair(z))
}
