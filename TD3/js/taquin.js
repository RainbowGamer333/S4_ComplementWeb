/**
 * 
 * M413 - TD3 - Taquin Game
 * * 
 * @author Jean-Michel Bruneau
 *	@copyright UCA - IUT -INFO
 * @version	1.0
 * @date			2021-01-31
 *
 */
"use strict";

// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
    console.log('Processus de chargement du document terminé…');
    const boxList = document.querySelectorAll(".box");

    boxList.forEach(function(box) {
        box.addEventListener("click", function selection(event) {
            let clickedBox = event.target;
            let emptyBox = document.querySelector(".empty");

            if (clickedBox !== box || clickedBox === emptyBox) {
                clickedBox = clickedBox.parentNode;
            }

            const clickedBoxRow = clickedBox.id.charAt(1);
            const clickedBoxCol = clickedBox.id.charAt(4);
            const emptyBoxRow = emptyBox.id.charAt(1);
            const emptyBoxCol = emptyBox.id.charAt(4);

            if (Math.abs(parseInt(emptyBoxCol - clickedBoxCol) + parseInt(emptyBoxRow - clickedBoxRow)) === 1) {

                clickedBox.classList.add("empty");
                emptyBox.classList.remove("empty");

                emptyBox.innerHTML = clickedBox.innerHTML;
                clickedBox.innerHTML = "";
            }


        });
    });
}



// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;