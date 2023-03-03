'use strict';
const jSemaine = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
const moi = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]; 



function onLoad() {
	defineHeading4();
	swapInnerHTML();
	dateAlter();
}

function defineHeading1() {
	let heading = document.getElementById('title');
	document.title = heading.innerHTML;
}

function defineHeading2() {
	let heading = document.querySelector("h2");
	document.title = heading.innerHTML;
}

function defineHeading3() {
	let listHeadings = document.querySelectorAll("h2");
	let heading;
	if(!listHeadings || listHeadings.length == 0) {
		heading = document.querySelector('meta[name="author"]').content;
	} else {
		heading = listHeadings[listHeadings.length - 1];
	}
	document.title = heading.innerHTML;
}

function defineHeading4() {
	let listClass = document.getElementsByClassName("firstOrLast");
	let heading;
	if (!listClass || listClass.size == 0) {
		heading = document.querySelector('meta[name="author"]').content;
	} else if (listClass.length % 2 == 0) {
		heading = listClass[0];
	} else if (listClass.length % 2 == 1) {
		heading = listClass[listClass.length - 1];
	}
	document.title = heading.innerHTML;
}


function swapInnerHTML() {
	let listP = document.querySelectorAll("p");
	let p1 = listP[0];
	let p2 = listP[1];
	let temp = p1.innerHTML;
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = temp;
}


function dateAlter() {
	let today = new Date();
	let day = jSemaine[today.getDay()];
	let date = today.getDate();
	let month = moi[today.getMonth()];
	let year = today.getFullYear();
	let name = document.querySelector('meta[name="author"]').content;
	let content = "Dernière modification : le " + day + " " + date + " "  + month + " "  + year + " "  + "par " + name;

	let div = document.getElementById("update-date");
	div.innerHTML = content;
}