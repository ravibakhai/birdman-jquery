var main = function() {

  $("img").click(function() {
    console.log("Jeff")
    $(".dropdown-menu").toggle();
  });
}

$(document).ready(main);
