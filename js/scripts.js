$(function() {

  $("#button").click(function() {

    $('img').remove();

    // generate weapon for each player
    var player1 = Math.floor(Math.random() * 3) + 1;
    var player2 = Math.floor(Math.random() * 3) + 1;
    var player1img = '';
    var player2img = '';

    switch(player1) {
      case 1:  //rock
        player1img = '<img src="img/rock.png">';
        break;
      case 2:  //paper
        player1img = '<img src="img/paper.png">';
        break;
      case 3: //scissors
        player1img = '<img src="img/scissors.png">';
        break;
    }

    switch(player2) {
      case 1:  //rock
        player2img = '<img src="img/rock.png">';
        break;
      case 2:  //paper
        player2img = '<img src="img/paper.png">';
        break;
      case 3: //scissors
        player2img = '<img src="img/scissors.png">';
        break;
    }

    // prepend corresponding image for each player
    $("#left").prepend(player1img);
    $("#right").prepend(player2img);

    //Determine winner

    //Nobody wins :(
    if((player1 - player2) === 0) {
      $("#victory").text("NOBODY WINS");
    }
    else {
      //Somebody wins
      if(player1 === 1 && player2 === 2) {
        $("#victory").text("PLAYER2 WINS");
      }
      else if(player1 === 1 && player2 === 3){
        $("#victory").text("PLAYER1 WINS");
      }
      else if(player1 === 2 && player2 === 1){
        $("#victory").text("PLAYER1 WINS");
      }
      else if(player1 === 2 && player2 === 3){
        $("#victory").text("PLAYER2 WINS");
      }
      else if(player1 === 3 && player2 === 1){
        $("#victory").text("PLAYER2 WINS");
      }
      else if(player1 === 3 && player2 === 2){
        $("#victory").text("PLAYER1 WINS");
      }
    }

  });

});
