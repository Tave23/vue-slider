const imgMain = document.getElementsByClassName('image-main');
const imgSide = document.getElementsByClassName('aside-img');

let contatore = 0;

const down = document.getElementById('down');
const up = document.getElementById('up');

console.log(up);
console.log(down);

up.addEventListener('click', function(){
    imgMain[contatore].classList.remove('active');
    imgSide[contatore].classList.remove('active2');

    contatore--;

    if(contatore < 0) contatore = imgMain.length - 1;

    imgMain[contatore].classList.add('active');
    imgSide[contatore].classList.add('active2');
    console.log(imgMain);
})

down.addEventListener('click', function(){
    imgMain[contatore].classList.remove('active');
    imgSide[contatore].classList.remove('active2');

    contatore++;

    if(contatore > imgMain.length - 1) contatore = 0;

    imgMain[contatore].classList.add('active');
    imgSide[contatore].classList.add('active2');
})