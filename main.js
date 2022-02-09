var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
    
    counter = counter + 100;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
}
