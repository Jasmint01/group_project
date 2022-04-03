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
        if(arrow_block.style.maxHeight=="0px"){ //using max height since we don't need a specific height. height="auto" does not allow for animation
            arrows[i].classList.remove("fa-caret-right");
            arrows[i].classList.add("fa-caret-down");
            arrow_block.style.maxHeight="200px"; //default value is "none" but this does not allow for the animation
        }
        else{
            arrows[i].classList.remove("fa-caret-down");
            arrows[i].classList.add("fa-caret-right");
            arrow_block.style.maxHeight="0px";
        }
    });
}