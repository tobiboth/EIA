//Deutschland
const DE = "Deutschland";
const bevölkerungDE2022 = 83240000;
const bevölkerungDE2006 = 82310000;
//Frankreich
const FR = "Frankreich";
const bevölkerungFR2022 = 67840000;
const bevölkerungFR2006 = 63620000;
//Italien
const IT = "Italien";
const bevölkerungIT2022 = 58980000;
const bevölkerungIT2006 = 58140000;
//Portugal
const P = "Portugal";
const bevölkerungP2022 = 10350000;
const bevölkerungP2006 = 10520000;
//EU
const bevölkerungEU = 447700000;

//Deutschland
function germany() {
    document.querySelector("#people22").innerHTML = (bevölkerungDE2022 / 1000000) + "Mio.";
    document.querySelector("#text").innerHTML = "Bevölkerung in Deutschland 2022";
    document.querySelector("#relative").innerHTML = (bevölkerungDE2022 / bevölkerungEU * 100) + "%";
    document.querySelector("#rate").innerHTML = ((1 - bevölkerungDE2006 / bevölkerungDE2022) * 100) + "%";
    document.querySelector("#people06").innerHTML = ((bevölkerungDE2022 - bevölkerungDE2006) / 1000000) + "Mio.";
    (document.querySelector(".chart") as HTMLDivElement).style.height = (bevölkerungDE2022 / bevölkerungEU * 100) + "%";
}
document.querySelector(".germany").addEventListener('click', germany)

//Frankreich
function france() {
    document.querySelector("#people22").innerHTML = (bevölkerungFR2022 / 1000000) + "Mio.";
    document.querySelector("#text").innerHTML = "Bevölkerung in Frankreich 2022";
    document.querySelector("#relative").innerHTML = (bevölkerungFR2022 / bevölkerungEU * 100) + "%";
    document.querySelector("#rate").innerHTML = ((1 - bevölkerungFR2006 / bevölkerungFR2022) * 100) + "%";
    document.querySelector("#people06").innerHTML = ((bevölkerungFR2022 - bevölkerungFR2006) / 1000000) + "Mio.";
    (document.querySelector(".chart") as HTMLDivElement).style.height = (bevölkerungFR2022 / bevölkerungEU * 100) + "%";
}
document.querySelector(".france").addEventListener('click', france)

//Italien
function italy() {
    document.querySelector("#people22").innerHTML = (bevölkerungIT2022 / 1000000) + "Mio.";
    document.querySelector("#text").innerHTML = "Bevölkerung in Italien 2022";
    document.querySelector("#relative").innerHTML = (bevölkerungIT2022 / bevölkerungEU * 100) + "%";
    document.querySelector("#rate").innerHTML = ((1 - bevölkerungIT2006 / bevölkerungIT2022) * 100) + "%";
    document.querySelector("#people06").innerHTML = ((bevölkerungIT2022 - bevölkerungIT2006) / 1000000) + "Mio.";
    (document.querySelector(".chart") as HTMLDivElement).style.height = (bevölkerungIT2022 / bevölkerungEU * 100) + "%";
}
document.querySelector(".italy").addEventListener('click', italy)

//Portugal
function portugal() {
    document.querySelector("#people22").innerHTML = (bevölkerungP2022 / 1000000) + "Mio.";
    document.querySelector("#text").innerHTML = "Bevölkerung in Portugal 2022";
    document.querySelector("#relative").innerHTML = (bevölkerungP2022 / bevölkerungEU * 100) + "%";
    document.querySelector("#rate").innerHTML = ((1 - bevölkerungP2022 / bevölkerungP2006) * 100) + "%";
    document.querySelector("#people06").innerHTML = ((bevölkerungP2022 - bevölkerungP2006) / 1000000) + "Mio.";
    (document.querySelector(".chart") as HTMLDivElement).style.height = (bevölkerungP2022 / bevölkerungEU * 100) + "%";
}
document.querySelector(".portugal").addEventListener('click', portugal)



/**
 * int main(){
 * 
 * var str Zielland;
 * var int Einwohnerzahl2022;
 * var int Einwohnerzahl2006;
 * 
 * scan = new Scanner();
 * 
 * print("Bitte Zielland eingeben: ");
 * input scan(Zielland);
 * 
 * print("Bitte Einwohnerzahl 2022 eingeben: ");
 * input scan(Einwoherzahl2022);
 * 
 * print("Bitte Einwohnerzahl 2006 eingeben: ");
 * input scan(Einwoherzahl2006);
 * 
 * print("Die Einwohnerzahl in " + Zielland + " im Jahr 2022: " + Einwohnerzahl2022);
 * print("Die Einwohnerzahl in " + Zielland + " im Jahr 2006: " + Einwohnerzahl2006);
 * print("Die Bevölkerung stiegt um: " +((1-Einwohnerzahl2006/Einwohnerzahl2022)*100)+"%" + "im Land" + Zielland);
 * 
 * };
 */


/**
 * document.querySelector("#test").addEventListener("click",myfunction () {
 * myfunction(3, 8);
 * };
 * 
 * function myfunction(number1,number2) {
 * const result = number1 + number2;
 * return result;
 * }
 */