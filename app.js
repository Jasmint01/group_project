let menu=document.getElementById("menu");
let hb=document.getElementById("menu-button");
let arrows=document.getElementsByClassName("collapse");

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

for(let i=0;i<arrows.length;i++){
    arrows[i].addEventListener("click",function(){
        let arrow_block=arrows[i].parentElement.nextElementSibling;
        if(arrow_block.style.display=="none"){
            arrow_block.style.display="flex";
            arrows[i].classList.remove("fa-caret-right");
            arrows[i].classList.add("fa-caret-down");
        }
        else{
            arrow_block.style.display="none";
            arrows[i].classList.remove("fa-caret-down");
            arrows[i].classList.add("fa-caret-right");
        }
    });
}