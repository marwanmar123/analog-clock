// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


// Déplacer les aiguilles 
function demarrerLaMontre() {
    const now = new Date();
    hours = now.getHours();
    min = now.getMinutes();
    second = now.getSeconds();

    AIGUILLEHR.style.transform = "rotate(" + (hours / 12) * 360 + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + (min / 60) * 360 + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + (second / 60) * 360 + "deg)";

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

demarrerLaMontre();