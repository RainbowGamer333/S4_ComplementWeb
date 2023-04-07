//1.1.a
const firstPersonne = {};
firstPersonne.nom = "Patureau";
firstPersonne.prenom = "Romain";
firstPersonne.age = 19;
firstPersonne.taille = 189;

//1.1.b
const personne = {
    nom: "Patureau",
    prenom: "Romain",
    age: 19,
    taille: 189
};
console.log(personne);

//1.1.c
let x = personne;
x.age = 2000000;
console.log(x);
console.log(personne);

/*
* Quand on change les valeurs de x les valeurs de personne sont aussi changées. Cela veut dire que x et personne pointent vers le même objet.
*/


//1.2.a
console.log(personne.nom);
console.log(personne["nom"]);
console.log(Object.values(personne)[0]);

//1.2.b
for (let key in personne) {
    console.log(personne[key]);
}

//1.2.c
personne.poids = 80;
console.log(personne);

//1.2.d
delete personne.poids;
console.log(personne);


//1.3.a
personne.sports = {
    sport1: "Volleyball",
    sport2: "Basketball",
    sport3: "Tennis"
}
console.log(personne);

//1.3.b
console.log(personne.sports);

//1.3.c
for (let key in personne.sports) {
    console.log(personne.sports[key]);
}

//1.3.d
personne.sports.sport1 = {
    nom: "Volleyball",
    equipement: ["Ballon", "Filet"]
};
personne.sports.sport2 = {
    nom: "Basketball",
    equipement: ["Ballon", "Panier"]
};
personne.sports.sport3 = {
    nom: "Tennis",
    equipement: ["Raquette", "Balle", "Filet"]
};

for (let key in personne.sports) {
    console.log(personne.sports[key]);
}

//1.4.a
personne. qui = function () {
    return this.prenom + " " + this.nom;
}

//1.4.b
personne.quimaj = function () {
    return this.prenom.toUpperCase() + " " + this.nom.toUpperCase();
}


//1.5.a
//Utilisez Object.values(personne) pour affichez les propriétés de personnes dans une div
let div = document.createElement("div");
div.innerHTML = Object.values(personne);
document.body.appendChild(div);
document.body.appendChild(document.createElement("hr"));

//1.5.b
//Affichez le contenu des propriétés de personne en utilisant JSON.stringify() qui transforme les champs de personne en chaine de caractère.
let div2 = document.createElement("div");
div2.innerHTML = JSON.stringify(personne);
document.body.appendChild(div2);
document.body.appendChild(document.createElement("hr"));

//1.5.c
personne.naissance = new Date(2003, 6, 11);
let div3 = document.createElement("div");
div3.innerHTML = JSON.stringify(personne);
document.body.appendChild(div3);
document.body.appendChild(document.createElement("hr"));

//1.5.d
personne.age = function() {
    return this.age;
}
let div4 = document.createElement("div");
div4.innerHTML = JSON.stringify(personne);
document.body.appendChild(div4);
document.body.appendChild(document.createElement("hr"));




