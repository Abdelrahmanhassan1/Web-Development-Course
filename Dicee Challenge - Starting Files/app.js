function Click_button() {
  //   window.location.reload();
  var random_number_1 = Math.floor(Math.random() * 6) + 1;
  var image_1 = document.querySelector(".img1");
  image_1.src = "././images/dice" + random_number_1 + ".png";
  var random_number_2 = Math.floor(Math.random() * 6) + 1;
  var image_2 = document.querySelector(".img2");
  image_2.src = "././images/dice" + random_number_2 + ".png";

  //check for the winner!
  var heading_title = document.querySelector("h1");
  if (random_number_1 === random_number_2) {
    heading_title.innerHTML = "draw!";
  } else if (random_number_1 > random_number_2) {
    heading_title.innerHTML = "🚩Player 1 Wins!";
  } else if (random_number_1 < random_number_2) {
    heading_title.innerHTML = "Player 2 Wins!🚩";
  }
}
