//Arraylist innehållande bilderna som ska presenteras i bildspelet
const bilder = [
    "https://ideogram.ai/assets/progressive-image/balanced/response/aeJrHQ_eQpSAVcghBKwyVw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/5n8fBNn6Q9uSl6caFsWCIw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/xR_1jUvtQca5HClZsUCqdA"
];

let nuvarandeIndex = 0;

// Hämta img-elementet
const bildspelBild = document.getElementById("bildspelBild");


// Vi assingar en viss bild från arraylistan till sourcen till img elementet i html
// bildens position i arraylistan tas in via parametern 
function visaBild(index) {
    bildspelBild.src = bilder[index];
}

// Event för att gå till nästa bild
// eftersom tredje postion ej existerar, kommer vi gå till första bileden 
document.getElementById("nastaBtn").addEventListener("click", function() {
    nuvarandeIndex++;
    if (nuvarandeIndex >= bilder.length) {
        nuvarandeIndex = 0; // Går till första bilden om vi når slutet
    }
    visaBild(nuvarandeIndex);
});

// Event för att gå tillbaka till föregående bild
// if statement gör att vi går till sista bilden i listan om vi är på första och går tillbaka 
document.getElementById("foregaendeBtn").addEventListener("click", function() {
    nuvarandeIndex--;
    if (nuvarandeIndex < 0) {
        nuvarandeIndex = bilder.length - 1; // Går till sista bilden om vi är på första
    }
    visaBild(nuvarandeIndex);
});

// Visar den första bilden när sidan laddas, eftersom användaren inte hunnit clicka på ngt och indexet är set till 0
visaBild(nuvarandeIndex);