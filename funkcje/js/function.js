// funkcja bez parametrów

var zmienna1 = "Adam"  //zmienna globalna widoczna wszedzie

function zmiennaLokalna() {
    var zmienna1 = "Zmienna lokalna Adam";   // zmienna lokalna widoczna tylko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna w funkcji";
    console.log(zmienna2);
}

zmiennaLokalna();  //wywolanie funkcji


function obliczWynik() {
    var wynik = 10 * 15 * 20;
    return wynik;
}

var rezultatObliczenia = obliczWynik();
console.log(rezultatObliczenia);


//parametry

function obliczWynik( parametr1, parametr2, parametr3 ) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}

var rezultatObliczen = obliczWynik( 20, 20, 3 );
console.log(rezultatObliczen);

var rezultatObliczen2 = obliczWynik( 1, 2, 3 );
console.log(rezultatObliczen2);

var rezultatObliczen3 = obliczWynik( 20, 20, 3 );
console.log(rezultatObliczen3);