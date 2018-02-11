var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function() {
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);

osoba.wyswietlSzczegoly();



var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function( paramImie ) {
        this.imie = paramImie;
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);

osoba.wyswietlSzczegoly("ela");

// dodawanie wlasciwosci
osoba.wiek = 36;
osoba.wyswietlWiek = function() {
    console.log(this.wiek);
}
osoba.wyswietlWiek();