var audio_name=document.getElementById("audio");
var song_name=document.getElementById("list_songs");
var songs_arr=[
{audio_name:'Dandelions.mp3' , song_name:'Dandelions' , song_id:0},
{audio_name:'Until_I.mp3' , song_name:'Until I Found You' , song_id:1},
{audio_name:'Snap.mp3' , song_name:'SNAP' , song_id:2},
{audio_name:'Dandelions.mp3' , song_name:'Dandelions' , song_id:3},
{audio_name:'Until_I.mp3' , song_name:'Until I Found You' , song_id:4},
{audio_name:'Snap.mp3' , song_name:'SNAP' , song_id:5},
{audio_name:'Dandelions.mp3' , song_name:'Dandelions' , song_id:6},
{audio_name:'Until_I.mp3' , song_name:'Until I Found You' , song_id:7},
{audio_name:'Snap.mp3' , song_name:'SNAP' , song_id:8},
];
let text="";
// console.log(songs_arr.length);
// var arr=songs_arr.forEach(index,item=>item[index++].song_name);
for(let i=0;i<songs_arr.length;i++){
     text+=`<p onclick="play1(${i},'audio/${songs_arr[i].audio_name}')">${songs_arr[i].song_name}</p>`;
}
document.getElementById("ul_id").innerHTML=text;
var ind="";
function play1(index,song){
    audio.src=song;
    audio.play();
    ind= index;
    localStorage.setItem(index,ind);
}

function previous_song(){

if(ind==0)
ind=songs_arr.length-1;
else
ind--;
var name=`audio/${songs_arr[ind].audio_name}`;
play1(ind,name);
}
function next_song(){
    if(ind==songs_arr.length-1)
    ind=0;
else
    ind++;
    var name=`audio/${songs_arr[ind].audio_name}`;
    play1(ind,name);
    }