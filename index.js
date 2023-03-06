$("h1").addClass("bigTitle");
$("h1").text("BEY");

$("button").addClass("buttonCss buttonBC").text("DONT");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// $("input").keypress(function (e) {
//   $("h1").text(e.target.value);
// });

$("input").on("keyup", function (e) {
  $("h1").text(e.target.value);
});
