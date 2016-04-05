$(function(){

//initial object variables to store each retrieved movie in
  var spiritedAway = {};
  var theMatrix = {};
  var exMachina = {};


//these button handlers retrieve and display information
  $("#getMovie1").on("click", function(){
    buttonDefault();
    $("#getMovie1").addClass("highlighted");
    $.ajax({
      url: "http://www.omdbapi.com/?t=Spirited+Away&y=&plot=full&r=json",
      type: "get"
    }).done(function(response){
      clearDisplay();
      spiritedAway = response;
      console.log(spiritedAway);
        $("#movieDiv").prepend("<img src = " + spiritedAway.Poster + ">");
        $("#movieDiv").find("p").text(spiritedAway.Title + ", (" + spiritedAway.Year + ").");
        // $("#movieDiv").append("<ul><li>" + spiritedAway.Plot + "</li></ul>")

    })
  })

  $("#getMovie2").on("click", function(){
    buttonDefault();
    $("#getMovie2").addClass("highlighted");
    $.ajax({
      url:"http://www.omdbapi.com/?t=The+Matrix&y=&plot=full&r=json",
      type: "get"
    }).done(function(response){
      clearDisplay();
      theMatrix = response;
      console.log(theMatrix);
      $("#movieDiv").prepend("<img src = " + theMatrix.Poster + ">");
      $("#movieDiv").find("p").text(theMatrix.Title + ", (" + theMatrix.Year + ").");
    })
  })

  $("#getMovie3").on("click", function(){
    buttonDefault();
    $("#getMovie3").addClass("highlighted");
    $.ajax({
      url:"http://www.omdbapi.com/?t=Ex+Machina&y=&plot=full&r=json",
      type: "get"
    }).done(function(response){
      clearDisplay();
      exMachina = response;
      console.log(exMachina);
      $("#movieDiv").prepend("<img src = " + exMachina.Poster + ">");
      $("#movieDiv").find("p").text(exMachina.Title + ", (" + exMachina.Year + ").");
    })
  })

//Button handler to clear the movie div
  $(".clear").on("click", function(){
    buttonDefault();
    clearDisplay();
  })

//this function is called above to clear div w/ displayed information
  function clearDisplay(){
    $("#movieDiv").find("img").remove();
    $("#movieDiv").find("p").text("");
  }

//this sets the buttons back to their default color
  function buttonDefault(){
    $("#getMovie1, #getMovie2, #getMovie3").removeClass("highlighted");
  }



//closes document ready
})
