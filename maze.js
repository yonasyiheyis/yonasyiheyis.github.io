$(document).ready(function() {

    var start = false;

    $("#start").click(function (){
        start = true;
        $("#status").text("Game Has Started!");
		$(".boundary").removeClass("lost");
    });

    $(".boundary").mouseover(function() {
		lostGame();
	});

    $("body").mouseover(function() {
		if (event.target.id != ("maze") && event.target.id != ("start") && event.target.id != ("end")) {
			lostGame();
		}
	});

    $("#end").mouseover(function() {
		if (start) {
			start = false;
			$("#status").text("You win!");
		}
	});

    function lostGame() {
		if (start) {
			start = false;
			$("#status").text("You lose!");
			$(".boundary").addClass("lost");
		}
	}

});