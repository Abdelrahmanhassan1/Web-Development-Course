var button_colors = ["red", "blue", "green", "yellow"];

var game_pattern = [];
var user_clicked_pattern = [];

var started = false;
var level = 0;

// Game Starts:
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level + ":");
    next_sequence();
    started = true;
  }
});

// get which button user clicked
$(".btn").click(function (event) {
  //   console.log(e.target.id);
  var user_chosen_color = event.target.id;
  user_clicked_pattern.push(user_chosen_color);
  //   console.log(user_clicked_pattern);
  play_sound(user_chosen_color);
  animate_pressed_button(user_chosen_color);
  check_answer(user_clicked_pattern.length - 1);
});

function check_answer(current_level) {
  if (game_pattern[current_level] === user_clicked_pattern[current_level]) {
    // console.log("success");

    if (user_clicked_pattern.length === game_pattern.length) {
      setTimeout(function () {
        next_sequence();
      }, 1000);
    }
  } else {
    // console.log("wrong");
    play_sound("wrong");

    $("body").addClass("game-over");

    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    start_over();
  }
}

// main function
function next_sequence() {
  user_clicked_pattern = [];
  // increasing the level
  level++;

  $("#level-title").text("Level " + level + ":");

  var random_number = Math.floor(Math.random() * 4);
  //   console.log(random_number);

  var random_color_chosen = button_colors[random_number];
  game_pattern.push(random_color_chosen);

  //  first we select the button with the chosen color and add a flash animation
  $("#" + random_color_chosen)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // then we add the sound for it
  play_sound(random_color_chosen);
}

//   sound player handler function
function play_sound(button_name) {
  var audio = new Audio("./sounds/" + button_name + ".mp3");
  audio.play();
}

//   button pressed animation handler function
function animate_pressed_button(button_color) {
  $("#" + button_color).addClass("pressed");
  setTimeout(function () {
    $("#" + button_color).removeClass("pressed");
  }, 100);
}

function start_over() {
  level = 0;
  started = false;
  game_pattern = [];
}
