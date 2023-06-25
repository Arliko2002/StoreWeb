
$(".supporters").click(function() {
  var singer = this.id;
  makeSound(singer);
});

$(".supporters").on("mouseover", function() {
  var singer = this.id;
  $("#"+singer).animate({ height: "350px" });
});
$(".supporters").on("mouseout", function() {
  var singer = this.id;
  $("#"+singer).animate({ height: "300px" });
});

function makeSound(singer) {
  var audio = new Audio("sounds/" + singer + ".mp3");
  audio.play();
  $("#"+singer).click(function() {
    audio.pause();
  });
}
