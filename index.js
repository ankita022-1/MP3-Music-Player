let music = document.querySelector("audio");
const prev = document.getElementById("previous");
const controller = document.getElementById("play");
const next = document.getElementById("next");

//for changing title, artist name & background
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const body = document.getElementById("body");

let isPlaying = false;

// Define the list of tracks that have to be played
let track_list = [
    {
        title: "Radha Krishna",
        artist: "Shreya Sharma & Hariharan"
    },
    {
        title: "Radha Krishna - Tum Prem Ho Tum Preet Ho Song ",
        artist: "Hariharan"
    },
    {
        title: "Yeh chand sa roshan chehra",
        artist: "Mohammad Rafi"
    },
    {
        title: "Yeh Parda Hata Do",
        artist: "Asha Bhosle"
    },
];
//defining variables
let num = 0;
let song_count = track_list.length;
// play function
play = () => {
    controller.classList.replace("fa-stop-circle-o", "fa-play-circle-o");
    title.innerHTML = track_list[num].title;
    artist.innerHTML = track_list[num].artist;

    let temp = Number(num) + 1;
    // console.log("temp=" + temp);

    if (temp == 2) {
        body.setAttribute("style", "background-image:url('/images/music2_img.jpg');");
    }else if (temp == 2) {
        body.setAttribute("style", "background-image:url('/images/music2_img.jpg');");
    }else if (temp == 3) {
        body.setAttribute("style", "background-image:url('/images/music3_img.jpg');");
    }else{
        body.setAttribute("style", "background-image:url('/images/music4_img.jpg');");
    }

    music.play();
}
//pause function
pause = () => {
    controller.classList.replace("fa-play-circle-o", "fa-stop-circle-o");
    music.pause();
}
// audio controller
controller.addEventListener('click', () => {
    if (isPlaying == false) {
        isPlaying = true;
        play();
    } else {
        isPlaying = false;
        pause();
    }
})
//play previous audio
prev.addEventListener('click', () => {
    isPlaying = true;
    num = (num - 1 + song_count) % song_count;
    // console.log("song " + num + " is playing.");
    music.src = `music/music${num}.mp3`;
    play();
})
//play next audio
next.addEventListener('click', () => {
    num = (num + 1) % song_count;
    // console.log("song " + num + " is playing.");
    music.src = `music/music${num}.mp3`;
    play();
})

//if music is ended then automatically run the next one.
music.addEventListener("ended",()=>{
    num = (num + 1) % song_count;
    music.src = `music/music${num}.mp3`;
    play();
} )