var numberOfDrumPads = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumPads; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttons = this.innerText;

         switch (buttons) {
            case "pad1":
               var pad1 = new Audio ("sounds/Base1.mp3");
               pad1.play();
               break;
            case "pad2":
               var pad2 = new Audio ("sounds/eSnair1.mp3");
               pad2.play();
               break;
            case "pad3":
               var pad3 = new Audio ("sounds/eSnair3.mp3");
               pad3.play();
               break;
            case "pad4":
               var pad4 = new Audio ("sounds/SymTick1.mp3");
               pad4.play();
               break;
         // Lower drum pads
               case "pad5":
               var pad5 = new Audio ("sounds/eStick2.mp3");
               pad5.play();
               break;
            case "pad6":
               var pad6 = new Audio ("sounds/HHOpen.mp3");
               pad6.play();
               break;
            case "pad7":
               var pad7 = new Audio ("sounds/SymTick2.mp3");
               pad7.play();
               break;
            case "pad8":
               var pad8 = new Audio ("sounds/SymTick1.mp3");
               pad8.play();
               break;


            default:
               break;

         }

      });

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
