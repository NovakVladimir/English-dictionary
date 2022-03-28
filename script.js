const word = document.getElementById('yourText');
const audio = document.getElementById('aud');
const speak = document.getElementById('speak');
const mean = document.getElementById('mean');



audio.addEventListener('click', voice);


async function voice() {

    const aud = document.getElementById('startMusic');
    let adress = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word.value;

    const res = await fetch(adress);
    const data = await res.json();
    aud.src = await data[0].phonetics[0].audio;
    aud.play();
    speak.innerHTML = data[0].phonetic===undefined? "-" : data[0].phonetic;
    // mean.innerHTML = data[]
}






