var background = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var gradient = document.querySelector("#gradient");
var generator = document.querySelector(".generator");

gradient.style.background="linear-gradient(to right, " +color1.value+ ", " +color2.value+ ")";
background.textContent=gradient.style.background+";";
function generate(){
    gradient.style.background="linear-gradient(to right, " +color1.value+ ", " +color2.value+ ")";
    background.textContent=gradient.style.background+";";
}
color1.addEventListener("input", generate);
color2.addEventListener("input", generate);

//var rand1=Math.random().toString(16).substr(2, 6);
//var rand2=Math.random().toString(16).substr(2, 6);
generator.addEventListener("click", function(){
    var rand1=Math.random().toString(16).substr(2, 6);
    var rand2=Math.random().toString(16).substr(2, 6);
    gradient.style.background="linear-gradient(to right," +" #" +rand1+", " + " #"+rand2+ ")";
    background.textContent=gradient.style.background+";";
    color1.value="#"+rand1;
    color2.value="#"+rand2;
});
