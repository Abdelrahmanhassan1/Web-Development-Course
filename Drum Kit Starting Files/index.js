// # selecting the buttons and add event listeners
var numberOfButtons = document.querySelectorAll(".drum").length;

// checking which button is clicked
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button_text = this.innerHTML;
    // console.log(button_text);
    run_sound(button_text);
    animate_button_clicked(button_text);
  });
}

// checking which key is pressed in keyboard
document.addEventListener("keydown", function (event) {
  //   console.log(event);
  //   console.log(event.key);
  run_sound(event.key);
  animate_button_clicked(event.key);
});

function run_sound(button_pressed) {
  switch (button_pressed) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function animate_button_clicked(button_clicked) {
  var btn_to_animate = document.querySelector("." + button_clicked);
  btn_to_animate.classList.add("pressed");
  setTimeout(function () {
    btn_to_animate.classList.remove("pressed");
  }, 100);
}
