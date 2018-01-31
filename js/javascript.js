/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
alert("Strona w budowie");

// Zadanie 1 - Dane tekstowe:
// Wyświetlenie tekstu w tabeli .profil:
var element = document.getElementById('opis');
element.innerHTML = 'Po zakończeniu studiów magisterskich na kierunku ekonomiczno - prawnym w Uniwersytecie w Białymstoku\n\
 zostałam stażystką w Powiatowym Urzędzie Pracy w Sokółce. Aktualnie nie tylko pracuję w ww. urzędzie,\n\
 ale także jestem słuchaczem studiów podyplomowych pn. Aplikacje Internetowe – Front-End Development na Politechnice Białostockiej';


// Zadanie 2 - Dane innego rodzaju:
// 2.1. Zdjęcie:
//document.getElementById('imgCV').src = 'zdjecia/CV.zdjecie.png';
var img = document.getElementById('imgCV');
img.src = 'zdjecia/CV.zdjecie.png';

//
//
// 2.2 Odnośnik:

// 2.3. Bar progresu w tabeli .umiejetnosci:

// Zadanie 3 - Dane wyświetlane w postaci listy - tablica (Array)


// Zadanie 4 - Tabela - tworzona / wypełniona danymi z JS


// Zadanie 5 - Formularz: weryfikowanie danych
// Potwierdzenie akceptacji danych formularza
// Wyświetlenie zawartości formularza

// Zadanie 6 - Odkrywanie i ukrywanie forumalrzu konaktowego po przyciśnięciu buttona
function Show() {
    var x = document.getElementById("form1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Zadanie 7 - Tabela z umiejętnościami - posortowana na różne sposoby po kliknięciu w wybrany button




/* walidacja checkboxu 
function checkFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked === true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
} */