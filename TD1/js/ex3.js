const formColour = document.getElementById("formInput").addEventListener("input", (event) => {
    let input = document.getElementById("formInput");
    let cname = "";
    if(input.value === "") {
        cname = "white";
    }
    else if (!isNaN(input.value)) {
        cname = "green";
    }
    else cname = "red";
    input.className = cname;
});


infosPlusMoins = true;
const infosgeneral = document.getElementById("infosImage").addEventListener("click", (event) => {
    scrollableMenu("infosGeneral", "infosImage", infosPlusMoins);
    infosPlusMoins = !infosPlusMoins;
});

recherchePlusMoins = true;
const recherche = document.getElementById("rechercheImage").addEventListener("click", (event) => {
    scrollableMenu("recherche", "rechercheImage", recherchePlusMoins);
    recherchePlusMoins = !recherchePlusMoins;
});

enseignementPlusMoins = true;
const enseignement = document.getElementById("enseignementImage").addEventListener("click", (event) => {
    scrollableMenu("enseignement", "enseignementImage", enseignementPlusMoins);
    enseignementPlusMoins = !enseignementPlusMoins;
});


function scrollableMenu(id, idImage, infos) {
    image = document.getElementById(idImage);
    listElements = document.querySelectorAll("#" + id + " > li");

    infos = !infos;
    if(infos) {
        image.src = "./assets/images/plus.gif";
        listElements.forEach(element => element.style.display = "none");
    } else {
        image.src = "./assets/images/minus.gif";
        listElements.forEach(element => element.style.display = "block");  
    }
}


const search = document.getElementById("buttonSearch").addEventListener("click", (event) => {
    searchText = document.getElementById("search").value;
  
    if (!search.savedPage) {
      search.savedPage = document.body.innerHTML;
    } else {
      document.body.innerHTML = search.savedPage;
    }
  
    let allNodes = document.body.childNodes;
    for (i = 0; i < allNodes.length; i++) {
      node = allNodes[i];
  
      // Si le nœud est un élément de texte, on remplace le texte par un span avec la classe CSS "select"
      if (node.nodeType == Node.TEXT_NODE) {
        nodeText = node.textContent;
        searchRegex = new RegExp(searchText, "gi"); // Expression régulière pour trouver tous les mots correspondants
        newText = nodeText.replace(searchRegex, "<span class='select'>$&</span>");
        newNode = document.createElement("span");
        newNode.innerHTML = newText;
        node.parentNode.replaceChild(newNode, node);
      }
    }
})