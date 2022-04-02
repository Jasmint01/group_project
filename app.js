let menu=document.getElementById("menu");
let hb=document.getElementById("menu-button");

hb.addEventListener("click",function (){
    if(menu.style.display==="block") {
        hb.innerHTML="X";
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
        hb.innerHTML="≡";
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(min-width: 800px)").matches){ //note: only js method of checking width that matches to css methods
        menu.style.display="none";
        hb.innerHTML="≡";
    }
});