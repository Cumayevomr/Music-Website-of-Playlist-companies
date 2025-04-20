const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way <br>
             <div class="subtitle">Alan Walker</div>`,
             poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: ` AlanWalker-Fade <br><div class="subtitle">Alan Walker</div>`,
             poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: `Cartoon - On & On <br><div class="subtitle">Daniel Levi</div>`,
             poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: `Warriyo - Mortals  <br><div class="subtitle">Mortals</div>`,
             poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
             poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
             poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamasha</div>`,
             poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
             poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
             poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
             poster: "img/10.jpg"
    },
    {
        id: '11',
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
             poster: "img/11.jpg"
    },
    {
        id: '12',
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
             poster: "img/12.jpg"
    },
    {
        id: '13',
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
             poster: "img/13.jpg"
    },
    {
        id: '14',
        songName: `Vaaste  <br><div class="subtitle">Dhvani Bhanushali</div>`,
             poster: "img/14.jpg"
    },
    {
        id: '15',
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
             poster: "img/15.jpg"
    },
    {
        id: '16',
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamasha</div>`,
             poster: "img/dhvani.jpg"
    },
    {
        id: '17',
        songName: `Tu Meri Jingdi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
             poster: "img/13.jpg"
    },
    {
        id: '18',
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
             poster: "img/atif.jpg"
    },
    {
        id: '19',
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamasha</div>`,
             poster: "img/alan.jpg"
    },
    {
        id: '20',
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
             poster: "img/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=> {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

    })
})










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});