/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* odkrycie formularzu kontaktowego */
function Show() {
    var x = document.getElementById("form1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* walidacja checkboxu */
function checkFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked === true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
