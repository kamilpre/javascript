//var liczba1 = 14;
//var liczba2 = 6;
//
////console.log(liczba1 * liczba2);
////console.log(liczba1 / liczba2);
////console.log(liczba1 + liczba2);
////console.log(liczba1 - liczba2);
////console.log(liczba1 % liczba2);
//
////liczba1++;  //liczba1 = liczba1 +1
////console.log(liczba1);
////
////liczba2--; //liczba2 = liczba2 - 1
////console.log(liczba2);
////
////console.log(liczba1++);
////console.log(++liczba1);
//
//////operatory przypisania
////liczba1 += 2; // liczba1 = liczba1 + 2
////console.log(liczba1);
//
////liczba1 -= 2; // liczba1 = liczba1 - 2
////console.log(liczba1);
//
//
//var wynik = (liczba1 == liczba2) ? "prawda" : "fałsz";
//console.log(wynik);

//operatpry warunkowe -->
//var liczba1 = 13;
//var liczba2 = 6;
//var prawda = true;
//var pietro = 10;

//if( liczba1 > liczba2 && pietro == 14) {
//    console.log("Spełnione zaostały dwa warunki, także TRUE")
//}
//
//if( liczba1 > liczba2 || pietro == 14) {
//    console.log("Spełnione zaostały dwa warunki, także TRUE")
//}


//// if, else if
//if (liczba1 == liczba2) {
//    console.log("Liczby są równe");
//} else if (liczba1 < liczba2) {
//    console.log("liczba1 większa od liczby2");
//} else if ( liczba1 == "smog" ) {
//    console.log("liczba1 równa się smog");
//}else {
//    console.log("kod który wykona się gdy żaden  warunków nie zostanie spełniony");
//}


// switch 

var grupa = 13;

switch( grupa ) {
    case 10 :
        console.log("Liczba osób w grupie = 10");
    break; 
    case 12 :
        console.log("Liczba osób w grupie = 12");
    break;  
    case 14 :
        console.log("Liczba osób w grupie = 14");
    break;      
    case 18 :
        console.log("Liczba osób w grupie = 18");
    break;   
    case 20 :
        console.log("Liczba osób w grupie = 20");
    break;
        default :
        console.log("Nie wiadomo ile osób w grupie");
}
