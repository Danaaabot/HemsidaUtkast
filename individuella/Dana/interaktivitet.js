
const bilder = [
    "https://ideogram.ai/assets/progressive-image/balanced/response/aeJrHQ_eQpSAVcghBKwyVw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/5n8fBNn6Q9uSl6caFsWCIw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/xR_1jUvtQca5HClZsUCqdA"
];

let nuvarandeIndex = 0;


const bildspelBild = document.getElementById("bildspelBild");


function visaBild(index) {
    bildspelBild.src = bilder[index];
}

visaBild(nuvarandeIndex);

// Event för att gå till nästa bild
document.getElementById("nastaBtn").addEventListener("click", function() {
    nuvarandeIndex++;
    if (nuvarandeIndex >= bilder.length) {
        nuvarandeIndex = 0; 
    }
    visaBild(nuvarandeIndex);
});

// Event för att gå tillbaka till föregående bild
document.getElementById("foregaendeBtn").addEventListener("click", function() {
    nuvarandeIndex--;
    if (nuvarandeIndex < 0) {
        nuvarandeIndex = bilder.length - 1; 
    }
    visaBild(nuvarandeIndex);
});


