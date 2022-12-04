//Deutschland
const bevölkerungDE2022 = 83240000;
const bevölkerungDE2006 = 82310000;
//Frankreich
const bevölkerungFR2022 = 67840000;
const bevölkerungFR2006 = 63620000;
//Italien
const bevölkerungIT2022 = 58980000;
const bevölkerungIT2006 = 58140000;
//Portugal
const bevölkerungP2022 = 10350000;
const bevölkerungP2006 = 10520000;
//EU
const bevölkerungEU: number = 447700000;


//allgemein
var nation: string;
var population22: number;
var population06: number;

function population (nation, population22, population06): void {
    document.querySelector("#people22").innerHTML = (population22/ 1000000).toFixed(2) + "Mio.";
    document.querySelector("#text").innerHTML = "Bevölkerung in " + nation + " 2022";
    document.querySelector("#relative").innerHTML = (population22 / bevölkerungEU * 100).toFixed(2) + "%";
    document.querySelector("#rate").innerHTML = ((1 - population06 / population22) * 100).toFixed(2) + "%";
    document.querySelector("#people06").innerHTML = ((population22 - population06) / 1000000) + "Mio.";
    (document.querySelector(".chart") as HTMLDivElement).style.height = (population22 / bevölkerungEU * 100) + "%";
}

document.querySelector(".germany").addEventListener('click', function(){
    population("Deutschland", bevölkerungDE2022, bevölkerungDE2006);
})

document.querySelector(".france").addEventListener('click', function(){
    population("Frankreich", bevölkerungFR2022, bevölkerungFR2006);
})

document.querySelector(".italy").addEventListener('click', function(){
    population("Italien", bevölkerungIT2022, bevölkerungIT2006);
})

document.querySelector(".portugal").addEventListener('click', function(){
    population("Portugal", bevölkerungP2022, bevölkerungP2006);
})

function eu (nation, bevölkerungEU): void {
    document.querySelector(".stars") as HTMLAnchorElement ;(bevölkerungEU/ 1000000).toFixed(2) + "Mio.";
}

document.querySelector(".stars").addEventListener('click', function(){
    eu ("EU-Bevölkerungszahl: ", bevölkerungEU);
})


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
 * }
 * 
 * function myfunction(number1,number2) {
 * const result = number1 + number2;
 * return result;
 * }
 */