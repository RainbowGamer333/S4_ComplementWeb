const personne = {
    nom: "Patureau",
    prenom: "Romain",
    age: 19,
    taille: 189,
    sports: {
        sport1: {
            nom: "Volleyball",
            equipement: ["Ballon", "Filet"]
        },
        sport2: {
            nom: "Basketball",
            equipement: ["Ballon", "Panier"]
        },
        sport3: {
            nom: "Tennis",
            equipement: ["Raquette", "Balle", "Filet"]
        }
    },
    langue: ["Français", "Anglais", "Espagnol"],
    couleuryeux: "Marron",

    constructor: function(nom, prenom, age, taille, sports, langue) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.taille = taille;
        this.sports = sports;
        this.langue = langue;

        this.name = function() {
            return this.prenom + " " + this.nom;
        }

        this.changeName = function(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
    },

    constructor: function(nom, prenom, age, couleuryeux) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.couleuryeux = couleuryeux;
    },


    get Langue() {
        return this.langue;
    },

    set Langue(langue) {
        this.langue.push(langue);
    },

    qui: function() {
        return this.prenom + " " + this.nom;
    },

    quimaj: function() {
        return this.prenom.toUpperCase() + " " + this.nom.toUpperCase();
    },

    age: function() {
        return this.age;
    }
};

//2.1.c
/*
La différence entre "get fullName()" et fullName() est que "get fullName()" est une propriété et fullName() est une méthode.
 */

//2.1.d
const obj = { counter: 0 };

//create a getter for the counter property
Object.defineProperty(obj, "counter", {
    get: function reset() { this.counter = 0 },

    get: function inc() { this.counter ++; },

    get: function dec() { this.counter --;},

    set: function add(value) { this.counter += value; },

    set: function subs(value) { this.counter -= value; }
});

//create an instance of personne

let pere = personne.call("Pere", "Bob", 50, 180);
let mere = personne.call("Mere", "Alice", 45, 170);

let x1 = "Hello";
console.log(x1.length);

let x2 = 59;
console.log(x2.valueOf());

let x3 = new Math();
console.log(x3.random());
console.log(x3.PI);
console.log(x3.ceil(3.14));


//3

personne.prototype.nationalite = "Français";
personne.prototype.name = function() {
    return this.prenom + " " + this.nom;
};

//3.1
const personneEstomac = {
    nom: "",
    prenom: "",
    estomac: [],

    constructor: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    manger: function(nourriture) {
        if(this.estomac.length < 10) {
            this.estomac.push(nourriture);
        }
    },

    digestionOK: function() {
        this.estomac = [];
    },

    name: function() {
        return this.prenom + " " + this.nom;
    }
};

//3.2
const car = {
    modele: "",
    conso100km: 0,
    reservoirlitre: 0,
    compteurkm: 0

    constructor: function(modele, conso100km) {
        this.modele = modele;
        this.conso100km = conso100km;
    },

    addfuel: function(nblt) {
        this.reservoirlitre += nblt;
    },

    drive: function(nbkm) {
        this.compteurkm += nbkm;
        this.reservoirlitre -= (nbkm * this.conso100km) / 100;
        if(this.reservoirlitre < nbkm) {
            let distance = (this.reservoirlitre * 100) / this.conso100km;
            console.log("Je serais a cours de carburant dans " + distance + " km")
            this.reservoirlitre = 0;
            this.compteurkm += distance;
        }
    }
};

personne.prototype.constructor = function Baby(jouetFavori) {
    personne.call(this);
    this.jouetFavori = jouetFavori;
};

//propriété jouetFavori
Object.defineProperty(personne, "Baby", {
    jouetFavori: "",
    jouer: function() {
        return "Je joue avec mon jouet favori " + this.jouetFavori;
    }
});








