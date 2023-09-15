var numberOfDrumPads = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumPads; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttons = this.innerText;

playSound(buttons);

});

}

document.addEventListener("keypress", function(e) {


   playSound(e.key);
   
   buttonAnimation(e.key);


});


function playSound (key) {
         switch (key) {
            case "a":
               var pad1 = new Audio ("sounds/Base1.mp3");
               pad1.play();
               break;
            case "s":
               var pad2 = new Audio ("sounds/eSnair1.mp3");
               pad2.play();
               break;
            case "d":
               var pad3 = new Audio ("sounds/eSnair3.mp3");
               pad3.play();
               break;
            case "f":
               var pad4 = new Audio ("sounds/SymTick1.mp3");
               pad4.play();
               break;
         // Lower drum pads
               case "h":
               var pad5 = new Audio ("sounds/eStick2.mp3");
               pad5.play();
               break;
            case "j":
               var pad6 = new Audio ("sounds/HHOpen.mp3");
               pad6.play();
               break;
            case "k":
               var pad7 = new Audio ("sounds/SymTick2.mp3");
               pad7.play();
               break;
            case "l":
               var pad8 = new Audio ("sounds/SymTick1.mp3");
               pad8.play();
               break;

            
            default: console.log(key);

         }

     

}


// scripts for EDM loops.

const soundButtons = document.querySelectorAll(".soundButton");

soundButtons.forEach(button => {
    const soundId = button.getAttribute("data-sound");
    const audioElement = document.getElementById(soundId);
    let isSoundOn = false;

    button.addEventListener("click", function () {
        if (isSoundOn) {
            audioElement.pause();
            button.textContent = `Turn ${soundId} ON`;
        } else {
            audioElement.play();
            button.textContent = `Turn ${soundId} OFF`;
        }
        isSoundOn = !isSoundOn;
    });
});


function buttonAnimation(currentKey) {

   var activeButton = document.querySelector("." + currentKey);
 
   activeButton.classList.add("pressed");
 
   setTimeout(function() {
     activeButton.classList.remove("pressed");
   }, 100);
 
 }