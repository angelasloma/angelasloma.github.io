/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// ZADANIE 1 - Dane tekstowe:
// Wyświetlenie tekstu w tabeli .profil:
var element = document.getElementById('opis');
element.innerHTML = 'Po zakończeniu studiów magisterskich na kierunku ekonomiczno - prawnym w Uniwersytecie w Białymstoku\n\
 zostałam stażystką w Powiatowym Urzędzie Pracy w Sokółce. Aktualnie nie tylko pracuję w ww. urzędzie,\n\
 ale także jestem słuchaczem studiów podyplomowych pn. Aplikacje Internetowe – Front-End Development na Politechnice Białostockiej';
// ZADANIE 2 - Dane innego rodzaju:
// 2.1. Zdjęcie:
var img = document.getElementById('imgCV');
img.src = 'zdjecia/CV.zdjecie.png';
var width = img.clientWidth;
var height = img.clientHeight;
// 2.2. Odnośnik - link do strony www:
var str = 'angelasloma';
var result = str.link('https://angelasloma.github.io');
document.getElementById('link-github').innerHTML = result;
// 2.3. Resetowanie danych w formularzu kontaktowym
function Reset() {
    document.getElementById('btnReset').reset();
}

// ZADANIE 3 - Dane wyświetlane w postaci listy - tablica (Array)
text = '<ol>';
var i = 0;
var dane = ['<strong>Obsługa GitHub</strong> - poziom podstawowy', '<strong>Adobe Photoshop CC</strong> - poziom podstawowy',
    '<strong>Pakiet MS Office</strong> - poziom średnio-zaawansowany', '<strong>Prawo jazdy</strong> - kat. B'];
for (i = 0; i < dane.length; i++) {
    text += '<li>' + dane[i] + '</li>';
    document.getElementById('listaol').innerHTML = text;
}

// ZADANIE 4 - Tabela - wypełniona danymi z JS
function zbudujTabele() {
    addLineToHTMLTable('10.2017 - nadal', '<strong>Aplikacje internetowe – Front-End Development</strong>, Politechnika Białostocka');
    addLineToHTMLTable('10.2016 – 07.2017', '<strong>Informatyka - Technologie ICT i Programowanie</strong>, Politechnika Białostocka');
    addLineToHTMLTable('10.2014 – 09.2017', '<strong>Kierunek ekonomiczno-prawny</strong>, Uniwersytet w Białymstoku');
}
function addLineToHTMLTable(daty, kierunki) {
// Wybranie sekcji body w tabeli przy uzyciu selektora api
    var tableBody = document.querySelector('#tabelaBody');
    // dodanie wierszy na koniec tabeli
    var newRow = tableBody.insertRow();
    // dodanie nowych wierszy
    var dataCell = newRow.insertCell();
    dataCell.innerHTML = daty;
    var majorCell = newRow.insertCell();
    majorCell.innerHTML = kierunki;
}

// ZADANIE 5 - Formularz: walidacja danych
// Walidacja pola 'IMIĘ' w formularzu:
var imieInput = document.getElementById('imie');
var malyTekst1 = document.getElementById('malyTekst1');
var duzyTekst1 = document.getElementById('duzyTekst1');
imieInput.onfocus = function () {
    document.getElementById('wiadomoscimie').style.display = 'block';
};
// Ukryj div z informacją pól do wypełnienia, gdy użytkownik nie kliknie w pole 'nazwisko'
imieInput.onblur = function () {
    document.getElementById('wiadomoscimie').style.display = 'none';
};
// Pokaż pole, gdy uzytkownik kliknie w input z nazwiskiem
imieInput.onkeyup = function () {
    // Walidacja małych liter:
    var lowerCaseLetters = /[a-z]/g;
    if (imieInput.value.match(lowerCaseLetters)) {
        malyTekst1.classList.remove('invalid');
        malyTekst1.classList.add('valid');
    } else {
        malyTekst1.classList.remove('valid');
        malyTekst1.classList.add('invalid');
    }
    // Walidacja dużych liter:
    var upperCaseLetters = /[A-Z]/g;
    if (imieInput.value.match(upperCaseLetters)) {
        duzyTekst1.classList.remove('invalid');
        duzyTekst1.classList.add('valid');
    } else {
        duzyTekst1.classList.remove('valid');
        duzyTekst1.classList.add('invalid');
    }
};
// Walidacja pola 'NAZWISKO' w formularzu:
var nazInput = document.getElementById('nazwisko');
var malyTekst = document.getElementById('malyTekst');
var duzyTekst = document.getElementById('duzyTekst');
nazInput.onfocus = function () {
    document.getElementById('wiadomoscnaz').style.display = 'block';
};
// Ukryj div z informacją pól do wypełnienia, gdy użytkownik nie kliknie w pole 'nazwisko'
nazInput.onblur = function () {
    document.getElementById('wiadomoscnaz').style.display = 'none';
};
// Pokaż pole, gdy uzytkownik kliknie w input z nazwiskiem
nazInput.onkeyup = function () {
    // Walidacja inputu - małe litery:
    var lowerCaseLetters = /[a-z]/g;
    if (nazInput.value.match(lowerCaseLetters)) {
        malyTekst.classList.remove('invalid');
        malyTekst.classList.add('valid');
    } else {
        malyTekst.classList.remove('valid');
        malyTekst.classList.add('invalid');
    }
    // Walidacja - duże litery:
    var upperCaseLetters = /[A-Z]/g;
    if (nazInput.value.match(upperCaseLetters)) {
        duzyTekst.classList.remove('invalid');
        duzyTekst.classList.add('valid');
    } else {
        duzyTekst.classList.remove('valid');
        duzyTekst.classList.add('invalid');
    }
};
// Walidacja CHECKBOXU w formularzu
function checkFunction() {
    var checkBox = document.getElementById('myCheck');
    var text = document.getElementById('checktekst');
    if (checkBox.checked === true) {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}
// Potwierdzenie akceptacji danych formularza
function Wyslij() {
    var txt;
    var r = confirm('Czy na pewno chcesz wysłać swoje dane?');
    if (r === true) {
        txt = 'Wysłano wiadomość.';
    } else {
        txt = 'Anulowano wysłanie wiadomości.';
    }
    document.getElementById('zapytanieFor').innerHTML = txt;
}

// ZADANIE 6 - Odkrywanie i ukrywanie formularzu konaktowego po przyciśnięciu buttona:
function Show() {
    var x = document.getElementById('form1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
// ZADANIE 7 - Tabela .doświadczenie - posortowana po nazwie:
function pracaTab(n) {
    var table, rows, switching, x, y, shouldSwitch, switchcount = 0;
    table = document.getElementById('praca');
    switching = true;
    // Kierunek sortowania:
    dir = 'asc';
    while (switching) {
// Wyznaczenie braku sortowania
        switching = false;
        rows = table.getElementsByTagName('tr');
        // Pętla przechodząca przez każdy wiersz - poza colspanem i buttonem, które stanowią dwa pierwsze od góry wiersze
        for (i = 2; i < (rows.length - 2); i++) {
            shouldSwitch = false;
            // Porównanie dwóch elementów z dwóch komórek
            x = rows[i].getElementsByTagName('td')[n];
            y = rows[i + 2].getElementsByTagName('td')[n];
            // Sprawdzenie, czy wiersze powinny zamienić się miejscami, w zależności od asc lub desc
            if (dir === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
// Jeśli znaleziono taki przypadek, oznacza się te pola do zmiany i wówczas zakańczamy pętlę
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
// Zamiana oznaczonych wierszy
            rows[i].parentNode.insertBefore(rows[i + 2], rows[i]);
            switching = true;
            // W momencie zamiany dodaj liczbę zmiany o 1
            switchcount++;
        } else {
// W przypadku braku zmiany w kierunku 'asc', zamiana kierunku na desc - kolejne przejście pętli przez całą tabelę
            if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}