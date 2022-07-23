console.log("Welcome to Spotify");
// Initialize Variable

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Lose Yourself", filePath: "songs/1.mp3", coverPath: "images/1.jpg"},
    {songName: "How We Do ", filePath: "songs/2.mp3", coverPath: "images/2.jpg"},
    {songName: "Locked Up", filePath: "songs/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Many Men", filePath: "songs/4.mp3", coverPath: "images/4.jpg"},
    {songName: "The Next Episode", filePath: "songs/5.mp3", coverPath: "images/5.jpg"},
    {songName: "Right Now", filePath: "songs/6.mp3", coverPath: "images/6.jpg"},
    {songName: "The Real Slimshady", filePath: "songs/7.mp3", coverPath: "images/7.jpg"},
    {songName: "Still Dre", filePath: "songs/8.mp3", coverPath: "images/8.jpg"},
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//handle play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})


    // Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        myProgressBar.value = progress;
    })
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })
   
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
           audioElement.currentTime = 0;
           audioElement.play();
           masterPlay.classList.remove('fa-circle-play');
           masterPlay.classList.add('fa-circle-pause');
        })
    })
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=7){
            songIndex = 0;
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0;
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
    