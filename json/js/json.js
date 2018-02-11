var jsonOsoby = {
    "osoby" : [
        {
            imie : "Adam",
            nazwisko: "Nowacki",
            wzrost: 180,
            zainteresowania : [
                {nazwa: "podroze"},
                {nazwa: "sport"},
            ]
        },
        {
            imie : "Adam",
            nazwisko: "Nowacki",
            wzrost: 180,
            zainteresowania : [
                {nazwa: "podroze"},
                {nazwa: "sport"},
            ]
        },
    ]
}

//console.log(jsonOsoby);


jsonOsoby.osoby.forEach( function( element, index ) {
//    console.log( element.imie );
//    console.log( element.nazwisko );
//    console.log( element.wzrost );
//    console.log( element.zainteresowania );
    
    element.zainteresowania.forEach(function ( z, ind) {
        console.log( z );
    })
} );