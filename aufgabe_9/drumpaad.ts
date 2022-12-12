//Teil A
var soundA: HTMLAudioElement = new Audio('sound/A.mp3');
var soundC: HTMLAudioElement = new Audio('sound/C.mp3');
var soundF: HTMLAudioElement = new Audio('sound/F.mp3');
var soundG: HTMLAudioElement = new Audio('sound/G.mp3');
var soundlaugh1: HTMLAudioElement = new Audio('sound/laugh1.mp3');
var soundlaugh2: HTMLAudioElement = new Audio('sound/laugh2.mp3');
var soundhihat: HTMLAudioElement = new Audio('sound/hihat.mp3');
var soundkick: HTMLAudioElement = new Audio('sound/kick.mp3');
var soundsnare: HTMLAudioElement = new Audio('sound/snare.mp3');

function playsample(sound) {
    sound.play();
}

document.querySelector(".a").addEventListener("click", function () {
    playsample(soundA)
})

document.querySelector(".c").addEventListener("click", function () {
    playsample(soundC)
})

document.querySelector(".f").addEventListener("click", function () {
    playsample(soundF)
})

document.querySelector(".g").addEventListener("click", function () {
    playsample(soundG)
})

document.querySelector(".l1").addEventListener("click", function () {
    playsample(soundlaugh1)
})

document.querySelector(".l2").addEventListener("click", function () {
    playsample(soundlaugh2)
})

document.querySelector(".hihat").addEventListener("click", function () {
    playsample(soundhihat)
})

document.querySelector(".kick").addEventListener("click", function () {
    playsample(soundkick)
})

document.querySelector(".snare").addEventListener("click", function () {
    playsample(soundsnare)
})



//Teil B
var audio: string[] = ['sound/laugh1.mp3', 'sound/laugh1.mp3', 'sound/laugh2.mp3', 'sound/kick.mp3', 'sound/snare.mp3', 'sound/hihat.mp3', 'sound/snare.mp3', "sound/laugh1.mp3"];
var count: number = 0;
let beatid: number;

function playbeat(text): void {
    var beat: HTMLAudioElement = new Audio(text);
    beat.play();
}

function playBeat(): void {
    beatid = setInterval(function () {
        playbeat(audio[count]);
        count += 1;
        if (count > audio.length) {
            count = 0;
        }
    }, 420);
}


//Aufgabe 3:
var playstopBTN = document.getElementById("yoooo");
var count = 0;

function playstop(): void {
    if (playstopBTN.classList.contains('fa-play')) {
        playstopBTN.classList.remove('fa-play');
        playstopBTN.classList.add('fa-pause');
        playBeat();
        console.log('2');
        
    }
    else {
        playstopBTN.classList.remove('fa-pause');
        playstopBTN.classList.add('fa-play');
        clearInterval(beatid);
        console.log('3');
        
    }
}

document.querySelector('#playstopBTN').addEventListener('click', function () {
    playstop();
    console.log('1');
    
})


function remix() {
setInterval(function (){
    const rmx = Math.floor(Math.random() * audio.length);
    playbeat(audio[rmx]);
},420);
}

document.querySelector('#remixBTN').addEventListener('click', function (){
    remix();
})
