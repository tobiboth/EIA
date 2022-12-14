//Teil A
let sound = [('sound/A.mp3'), ('sound/C.mp3'), ('sound/F.mp3'), ('sound/G.mp3'), ('sound/laugh1.mp3'), ('sound/laugh2.mp3'), ('sound/hihat.mp3'), ('sound/kick.mp3'), ('sound/snare.mp3')];
function playsample(sound) {
    let sounds = new Audio(sound);
    sounds.play();
}
document.querySelector(".a").addEventListener("click", function () {
    playsample(sound[0]);
});
document.querySelector(".c").addEventListener("click", function () {
    playsample(sound[1]);
});
document.querySelector(".f").addEventListener("click", function () {
    playsample(sound[2]);
});
document.querySelector(".g").addEventListener("click", function () {
    playsample(sound[3]);
});
document.querySelector(".l1").addEventListener("click", function () {
    playsample(sound[4]);
});
document.querySelector(".l2").addEventListener("click", function () {
    playsample(sound[5]);
});
document.querySelector(".hihat").addEventListener("click", function () {
    playsample(sound[6]);
});
document.querySelector(".kick").addEventListener("click", function () {
    playsample(sound[7]);
});
document.querySelector(".snare").addEventListener("click", function () {
    playsample(sound[8]);
});
//Teil B
var audio = [sound[7], sound[6], sound[7], sound[7], sound[8], sound[6], sound[8]];
var count = 0;
let beatid;
var shuffle = [sound[6], sound[7], sound[8]];
let shuffleid;
var rmx = 0;
function playBeat() {
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
function playstop() {
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
});
function remix() {
    shuffleid = setInterval(function () {
        rmx = Math.floor(Math.random() * shuffle.length);
        playsample(shuffle[rmx]);
        rmx += 1;
        if (rmx > shuffle.length) {
            rmx = 0;
        }
    }, 400);
}
function remixstop() {
    if (remixBTN.classList.contains('fa-brain')) {
        remixBTN.classList.remove('fa-brain');
        remixBTN.classList.add('fa-pause');
        remix();
        console.log('5');
    }
    else {
        remixBTN.classList.remove('fa-pause');
        remixBTN.classList.add('fa-brain');
        clearInterval(shuffleid);
        console.log('6');
    }
}
document.querySelector('#remixBTN').addEventListener('click', function () {
    remixstop();
    console.log('4');
});
//# sourceMappingURL=drumpaad.js.map