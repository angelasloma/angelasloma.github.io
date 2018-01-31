/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Zadanie 1 - Dane tekstowe
document.getElementById("p1").innerHTML = "nnkjnkkkjkjn";

/* Zadanie 2 - Pozostałe dane 
var img = document.createElement('img');
img.src = "zdjecia/CV.zdjecie.png";
img.alt = 'Angela';
img.id = 'CVimg';
document.getElementById('foto').appendChild(img);*/

/* odkrycie formularzu kontaktowego */
function Show() {
    var x = document.getElementById("form1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* walidacja checkboxu 
 function checkFunction() {
 var checkBox = document.getElementById("myCheck");
 var text = document.getElementById("text");
 if (checkBox.checked === true) {
 text.style.display = "block";
 } else {
 text.style.display = "none";
 }
 }*/