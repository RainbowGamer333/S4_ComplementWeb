

window.addEventListener('load', function() {
    // Créer la div
    var insertDiv = document.createElement('div');
    insertDiv.setAttribute('id', 'insert-div');
    
    // Créer le select
    var insertType = document.createElement('select');
    insertType.setAttribute('id', 'insert-type');
    insertType.setAttribute('name', 'type');
    
    // Ajouter les options du select
    var optionDiv = document.createElement('option');
    optionDiv.setAttribute('value', 'div');
    optionDiv.innerHTML = 'div';
    insertType.appendChild(optionDiv);
    
    var optionP = document.createElement('option');
    optionP.setAttribute('value', 'p');
    optionP.innerHTML = 'p';
    insertType.appendChild(optionP);
    
    var optionSpan = document.createElement('option');
    optionSpan.setAttribute('value', 'span');
    optionSpan.innerHTML = 'span';
    insertType.appendChild(optionSpan);
    
    // Créer l'input
    var insertText = document.createElement('input');
    insertText.setAttribute('type', 'text');
    insertText.setAttribute('id', 'insert-text');
    insertText.setAttribute('value', 'My New Text Element');
    
    // Ajouter le select et l'input à la div
    insertDiv.appendChild(insertType);
    insertDiv.appendChild(insertText);
    
    // Ajouter la div au début du body
    document.body.insertBefore(insertDiv, document.body.firstChild);


    initSelect();
});




function initSelect() {
    const body = document.querySelectorAll('body > :not(#insert-div)');
    body.forEach(element => {
        console.log(element);
        addEventListener("click", select);
    });

    const insert_div = document.getElementById('insert-div');
    insert_div.addEventListener("click", select2);
}

function select() {
    let prevSelected = document.getElementsByClassName("redSelected");
    if(prevSelected.length !== 0) {
        prevSelected[0].style.backgroundColor = "";
        prevSelected[0].removeAttribute("class")
    }
    
    event.target.style.backgroundColor = "red";
    event.target.setAttribute("class","redSelected");
}

function select2() {
    let prevSelected = document.getElementsByClassName("blueSelected");
    if(prevSelected.length !== 0) {
        prevSelected[0].style.backgroundColor = "";
        prevSelected[0].removeAttribute("class")
    }
    
    event.target.style.backgroundColor = "lightblue";
    event.target.setAttribute("class","blueSelected");
}


