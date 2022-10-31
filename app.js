const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:`  RoholaKarami
        <div class="subtitle">Veda</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` AmirTataloo <br>
        <div class="subtitle">Behesht</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: ` BTS
        <div class="subtitle"></div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Maydyar
        <div class="subtitle">Nefrin</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `HamidHidard
        <div class="subtitle">Tehran</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Yas
        <div class="subtitle">BarKod</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `AmirTataloo
        <br>
        <div class="subtitle">EnglabSolh</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Hamim
        <br>
        <div class="subtitle">KiMisheMan</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Pishro
        <br>
        <div class="subtitle">PashoPasho</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Shaye
        <br>
        <div class="subtitle">Mosser</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Shervin
        <br>
        <div class="subtitle">BarayeAzadi</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `ShadMehr
        <br>
        <div class="subtitle">Batel</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Kordi DJSay
        <br>
        <div class="subtitle">Pakdast4</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `SinaSarlak
        <br>
        <div class="subtitle">JanMan</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `MohsenChavoshi
        <br>
        <div class="subtitle">GorChine</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Rageb
        <br>
        <div class="subtitle">HavayEshge</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Mahdiyar
        <br>
        <div class="subtitle">MisheNobatMam</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `AbbasGeydi
        <br>
        <div class="subtitle">BagArezoha</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `MortezaJafarZade
        <br>
        <div class="subtitle">VaHame</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `AliMontazeri
        <br>
        <div class="subtitle">ZadeBesaram</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `MohsenYegane
        <br>
        <div class="subtitle">RagKhab</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `AliYasini
        <br>
        <div class="subtitle">BehtarAzMane</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Shakib
        <br>
        <div class="subtitle">Sartari</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `AronAfshar
        <br>
        <div class="subtitle">BoyeBahar</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `NaserPorKaram
        <br>
        <div class="subtitle">GolGandom</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `MohsenLorestani
        <br>
        <div class="subtitle">TangDelam</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `AliRezaTalisChi
        <br>
        <div class="subtitle">BamNabodKasi</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `AronAfshar
        <br>
        <div class="subtitle">GisoParishan</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `HamidHirad
        <br>
        <div class="subtitle">Vatan</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Nan
        <br>
        <div class="subtitle">BerimDarya</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Tataloo
        <br>
        <div class="subtitle">Marge</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Tataloo
        <br>
        <div class="subtitle">Gorg3</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `SepehrKhalse
        <br>
        <div class="subtitle">Fana</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `SepehrKhalse
        <br>
        <div class="subtitle">HamBastegi</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `BehzadLeyto
        <br>
        <div class="subtitle">ParoPache</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `ShadMehr
        <br>
        <div class="subtitle">Biehsas</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `Majid Ahmadi
        <br>
        <div class="subtitle">ZibayeMan</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Farhad Khalilpour
        <br>
        <div class="subtitle">Ashko Baroon</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: ` Masih
        <br>
        <div class="subtitle">Man Ba To</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Masoud Sadeghloo 
        <br>
        <div class="subtitle">To Ye Nafar Vase Delam</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Kiarad 
        <br>
        <div class="subtitle">Dore To
        </div>`,
        poster: "img/41.jpg",
    },
    {
        id:"42",
        songName: `Hooman Najafi
        <br>
        <div class="subtitle">Hayden Wa Koora</div>`,
        poster: "img/42.jpg",
    },
    {
        id:"43",
        songName: `Garsha Rezaei  
        <br>
        <div class="subtitle">Khoone Bigharari</div>`,
        poster: "img/43.jpg",
    },
    {
        id:"44",
        songName: `Ragheb 
        <br>
        <div class="subtitle">Bichare Farhad</div>`,
        poster: "img/44.jpg",
    },
    {
        id:"45",
        songName: `Mehdi Ahmadvand 
        <br>
        <div class="subtitle">farhad</div>`,
        poster: "img/45.jpg",
    },
    {
        id:"46",
        songName: `Ali Abdolmaleki
        <br>
        <div class="subtitle"> Bia Nazdik </div>`,
        poster: "img/46.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//searche data start
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const { id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
     <div class="content">
        ${songName}
     </div>
     `;
     search_result.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; 1 < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1 ){
            items[i].style.display = "flex";
        }else {
            items[i].style.display = "none"
        }
        if (input.value == 0){
            search_result.style.display = "none";

        }else {
            search_result.style.display = "";
        }

    }
})
//searche data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})


//lock copy
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);




const disableselect = (e) => {  
    return false  
  }  
  document.onselectstart = disableselect  












  //window.onload = function () {
     //document.addEventListener("contextmenu", function (e) {
       //  e.preventDefault();
    // }, false);
    // document.addEventListener("keydown", function (e) {
     //    //document.onkeydown = function(e) {
        // "I" key
     //    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
     //        disabledEvent(e);
     //    }
     //    // "J" key
       //  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      //       disabledEvent(e);
       //  }
       //  // "S" key + macOS
       //  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
       //      disabledEvent(e);
      //   }
        // "U" key
     //    if (e.ctrlKey && e.keyCode == 85) {
     //        disabledEvent(e);
     //    }
        // "F12" key
     //    if (event.keyCode == 123) {
      //       disabledEvent(e);
   //      }
  //   }, false);
  //   function disabledEvent(e) {
   //      if (e.stopPropagation) {
   //          e.stopPropagation();
    //     } else if (window.event) {
    ////          window.event.cancelBubble = true;
    //     }
     //    e.preventDefault();
      //   return false;
   // }
//}
//edit: removed ";" from last "}" because of javascript error




















