# **M413 - TD1 : Réponses aux Questions**

## **Exercice 1**
### **Exercice 1.1**

### *Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?*
document.addEventListener


### *Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise \<h1\> ?*
document.getElementById('title')


### *Quelle propriété de l’objet représentant votre balise \<h1\> avez-vous utilisée pour récupérer le texte de celui-ci ?*
heading.innerHTML


### *Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise \<h2\> ?*
document.querySelector("h2")

### *Comment faire pour connaitre le nombre de balise \<h2\> du document ?*
listHeadings = document.querySelectorAll("h2");   listHeadings.length

### *Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?*
document.getElementsByClassName("firstOrLast")

### *Comment avez-vous déterminé si un nombre est pair ?*
if (listClass.length % 2 == 0)

### **Exercice 1.2**

### *Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?*
innerHTML renvoi tout le contenu tel qu'est. innerText renvoi le contenu avec les elements stylistiques. textContent renvoi le contenu avec les elements stylistiques avec le formattage du contenu, comme les sauts de lignes ou les espaces en plus

### **Exercice 1.3**

### *Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?*
let listNames = document.querySelector('meta[name="author"]').content;
let firstName = listNames.slice(0);

### *Même question avec le dernier auteur de la liste.*
let lastName = listNames.slice(-1);


## **Exercice 2**

### *Comment obtenez-vous le nombre de jours ?*
On calcule la différence en millisecondes entre la date courante et le 19 juillet 2023

### *Comment faites-vous la mise à jour du texte ?*
On remplace les caractères "xxx" par le nombre de jours avec "day.innerHTML = day.innerHTML.replace("xxx", diffDate);

### *Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?*
J'ai utilisé la méthode setInterval car elle permet de voir en temps réel l'heure courante.


## **Exercice 3**

### *Quel évènement avez-vous utilisé ?*
J'ai utilisé l'évènement input pour appeler la methode à chaque fois qu'un caractère est entré dans la boite input.

### *Comment avez-vous fait changer la couleur du champ texte ?*
J'ai utilisé la méthode input.getClassName pour changer la classe de l'input, ce qui change de selecteur de style dans la page CSS.