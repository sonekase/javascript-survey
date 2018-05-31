$(document).ready(function() {
  $("#name").submit(function(event) {
    var firstName = $("input#name1").val();
    var lastName = $("input#name2").val();
    var userName = firstName + " " + lastName;
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $("#user-name").text(userName);
    $("#user-food").text(food);
    $("#user-music").text(music);
    $("#user-birthday").text(dob);
    $("#user-color").text(favoriteColor);
    event.preventDefault();
  });

});
