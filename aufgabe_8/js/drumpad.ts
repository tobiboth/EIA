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

function playsample1(sound) {
    sound.play();
}

document.querySelector(".a").addEventListener("click", function () {
    playsample1(soundA)
})

document.querySelector(".c").addEventListener("click", function () {
    playsample1(soundC)
})

document.querySelector(".f").addEventListener("click", function () {
    playsample1(soundF)
})

document.querySelector(".g").addEventListener("click", function () {
    playsample1(soundG)
})

document.querySelector(".l1").addEventListener("click", function () {
    playsample1(soundlaugh1)
})

document.querySelector(".l2").addEventListener("click", function () {
    playsample1(soundlaugh2)
})

document.querySelector(".hihat").addEventListener("click", function () {
    playsample1(soundhihat)
})

document.querySelector(".kick").addEventListener("click", function () {
    playsample1(soundkick)
})

document.querySelector(".snare").addEventListener("click", function () {
    playsample1(soundsnare)
})



//Teil B
var audio: string[] = ['sound/kick.mp3', 'sound/hihat.mp3', 'sound/kick.mp3', 'sound/kick.mp3', 'sound/snare.mp3', 'sound/hihat.mp3', 'sound/snare.mp3'];
var count: number = 0;
let intervalid: number;

function playbeat1(text): void {
    var beat: HTMLAudioElement = new Audio(text);
    beat.play();
}

function playbeat2(): void {
    intervalid = setInterval(function () {
        playbeat1(audio[count]);
        count += 1;
        if (count > 5) {
            count = 0;
        }
    }, 420);
}

document.querySelector(".play").addEventListener('click', function () {
    playbeat2();
})