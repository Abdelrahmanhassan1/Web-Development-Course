// the first line handles any errors if the jquery is fetched before javascript code is implemented
$(document).ready(function () {
  $("h1").css("color", "gold");
  ////////////////////////////////////////////////////////////////////////////////////
  //   the selector is the same for selecting many items or one item
  $("button").css("background-color", "dodgerblue");
  ////////////////////////////////////////////////////////////////////////////////////
  //   we can add class properity
  $("button").addClass("btn-rounded");
  ////////////////////////////////////////////////////////////////////////////////////
  //   check if it has a specific class name
  console.log($("button").hasClass("btn-rounded"));
  ////////////////////////////////////////////////////////////////////////////////////
  //   change the text of html element
  $("h1").text("Thanks!");
  $("button").html("<em>Hey!</em>");
  ////////////////////////////////////////////////////////////////////////////////////
  //   manipulate attributes
  console.log($("a").attr("href"));
  ////////////////////////////////////////////////////////////////////////////////////
  //   add Event Listener
  //   with js
  //   for (var i = 0; i < 5; i++) {
  //     document.querySelector("button").addEventListener("click", function () {
  //       document.querySelector("h1").style.color = "purple";
  //     });
  //   }
  ////////////////////////////////////////////////////////////////////////////////////
  //   with jquery
  $("button").click(function () {
    $("h1").css("color", "purple");
  });
  ////////////////////////////////////////////////////////////////////////////////////
  //   get every click in our website
  $(document).keydown(function (e) {
    console.log(e.key);
    $("h1").text(e.key);
  });
  ////////////////////////////////////////////////////////////////////////////////////
  //   adding and removing elements using jquery
  $("h1").before("<button>new button</button><br><br>");
  //   check prepend, append, after
  ////////////////////////////////////////////////////////////////////////////////////
  // make some animations
  $("button").click(function () {
    // $("h1").toggle();
    //  very nice effect
    // $("h1").slideToggle();
    // $("h1").animate({ margin: 20 });
    $("h1")
      .slideUp()
      .slideDown()
      .animate({ opacity: 0.5 })
      .animate({ opacity: 1 });
  });
});
