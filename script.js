const lyricsContainer = document.getElementById('lyrics');
function bottlesText(n, cap = false) {
    let t;
    if(n === 0) t = "no more bottles of beer";
    else if (n === 1) t = "1 bottle of beer";
    else t = `${n} bottles of beer`;

    return cap ? t.charAt(0).toUpperCase() + t.slice(1) : t;
}

function createVerse(n) {
    const verse = document.createElement('article');
    verse.className = 'verse';

    const line1 = document.createElement('p');
    line1.textContent = `${bottlesText(n, true)} on the wall, ${bottlesText(n)}.`;
    verse.appendChild(line1);

    const line2 = document.createElement('p');
    if (n > 0) {
        const action = n === 1? "Take it down and pass it around" : "Take one down and pass it around";
        line2.textContent = `${action}, ${bottlesText(n - 1)} on the wall.`;
    } 
    else {
        line2.textContent = "Go to the store and buy some more, 99 bottles of beer on the wall.";
  }
  verse.appendChild(line2);

  return verse;
}

function generateLyrics() {
    lyricsContainer.innerHTML = "";
    for (let i = 99; i >= 0; i--) {
        lyricsContainer.appendChild(createVerse(i));
    }
}

generateLyrics();
