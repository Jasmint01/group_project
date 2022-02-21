let menu=document.getElementById("menu");
let hb=document.getElementById("menu-button");

hb.addEventListener("click",function (){
    if(menu.style.display==="none") {
        hb.innerHTML="X";
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
        hb.innerHTML="≡";
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(min-width: 800px)").matches){ //note: only js method of checking width that matches to css methods
        menu.style.display="none";
        hb.innerHTML="≡";
    }
});