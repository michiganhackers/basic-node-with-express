$(document).ready(function() {

  $(".hidden.education.dynamic").removeClass("hidden");
  $("li[data-section=education]").addClass("active");

  // Resume Navigation, in four (4) lines
  $(".navbar li").on("click", function() {

    // Change the display pane
    $(".section.dynamic").addClass("hidden");
    $(".section.dynamic."+$(this).attr("data-section")).removeClass("hidden");

    // Show state in the navbar
    $(".navbar li").removeClass("active");
    $(this).addClass("active");

  });

});
