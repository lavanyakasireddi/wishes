let btn=document.getElementById("btn")
let stopmusic=document.getElementById("stopmusic")
let startmusic=document.getElementById("startmusic")
btn.addEventListener("click",()=>{
        
        document.getElementById("images").style.display="block";
        document.getElementById("music")
        document.getElementById("controls").style.display="block";
       
});
stopmusic.addEventListener("click",()=>{
        music.pause();
        music.currentTime=0;
});
startmusic.addEventListener("click",()=>{
        music.play();
        
});