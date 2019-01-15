$(function() {

  $("#button").click(function() {

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

    $("#left").prepend("");
  });

});
