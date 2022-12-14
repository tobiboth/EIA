//Teil A
let sound: string[] = [('sound/A.mp3'), ('sound/C.mp3'), ('sound/F.mp3'), ('sound/G.mp3'), ('sound/laugh1.mp3'), ('sound/laugh2.mp3'), ('sound/hihat.mp3'), ('sound/kick.mp3'), ('sound/snare.mp3')];

function playsample(sound: string): void {
    let sounds: HTMLAudioElement = new Audio(sound);
    sounds.play();
}

document.querySelector(".a").addEventListener("click", function () {
    playsample(sound[0]);
})

document.querySelector(".c").addEventListener("click", function () {
    playsample(sound[1]);
})

document.querySelector(".f").addEventListener("click", function () {
    playsample(sound[2]);
})

document.querySelector(".g").addEventListener("click", function () {
    playsample(sound[3]);
})

document.querySelector(".l1").addEventListener("click", function () {
    playsample(sound[4]);
})

document.querySelector(".l2").addEventListener("click", function () {
    playsample(sound[5]);
})

document.querySelector(".hihat").addEventListener("click", function () {
    playsample(sound[6]);
})

document.querySelector(".kick").addEventListener("click", function () {
    playsample(sound[7]);
})

document.querySelector(".snare").addEventListener("click", function () {
    playsample(sound[8]);
})



//Teil B
var audio: string[] = [sound[7], sound[6], sound[7], sound[7], sound[8], sound[6], sound[8]];
var count: number = 0;
let beatid: number;
var shuffle: string[] = [sound[6], sound[7], sound[8]];
let shuffleid: number;
var count2: number = 0;

function playBeat(): void {
    beatid = setInterval(function () {
        playsample(audio[count]);
        count += 1;
        if (count > audio.length) {
            count = 0;
        }
    }, 420);
}


//Aufgabe 3:
var playstopBTN = document.getElementById("yoooo");
var remixBTN = document.getElementById("yaaaa");
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
    shuffleid = setInterval(function () {
        const rmx: number = Math.floor(Math.random() * audio.length);
        playsample(shuffle[rmx], [count2]);
    }, 420);
}

function remixstop(): void {
    if (remixBTN.classList.contains('fa-brain')) {
        playstopBTN.classList.remove('fa-play');
        playstopBTN.classList.add('fa-pause');
        remix();
        console.log('5');

    }
    else {
        playstopBTN.classList.remove('fa-pause');
        playstopBTN.classList.add('fa-play');
        clearInterval(shuffleid);
        console.log('6');

    }
}

document.querySelector('#remixBTN').addEventListener('click', function () {
    remixstop();
    console.log('4');
})
