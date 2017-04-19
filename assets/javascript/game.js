$(document).ready(function() {
// var playGame = true;
// while (playGame == false){

	var myCharactor = -1;
	var fightCharactor = -1;
	var a = -1;
	var wincount = 0;

	var characters = [
		yoda = {
			name: "yoda",
			src: "assets/images/yoda.jpg",
			health: 125,
			attackPower: 8,
			counterAttackPower: 15,
			division: "'charactorRow0"
		},

		darthmaul = {
			name: "Darthmaul",
			src: "assets/images/darthmaul.jpg",
			health: 100,
			attackPower: 5,
			counterAttackPower: 13,
			division: "'charactorRow1"
		},

		hansolo = {
			name: "Hansolo",
			src: "assets/images/hansolo.jpg",
			health: 115,
			attackPower: 5,
			counterAttackPower: 12,
			division: "'charactorRow2"
		},

		stormtrouper = {
			name: "Stormtrouper",
			src: "assets/images/stormtrouper.jpg",
			health: 90,
			attackPower: 3,
			counterAttackPower: 10,
			division: "'charactorRow3"
		}
	]

	// This function displays each charactor block
		// Input:   The division into which the charator is to be displayed
		//			The index of the charactor in the charactors object
	function displayChar (a){
		console.log("in displaychar curent charactor - " + characters[a].name);
        $(topPicBlock).append("<button class=" + characters[a].division + " characterBlocs' value=" + a + "><p>" + characters[a].name + "</p><p><img src=" + characters[a].src + " alt='some char' style='height: 120px; width: 140px'></p><p id='healthPar" + a + "'>" + characters[a].health + "</p></button>");
    }

    // This function displays a line os text on the screen
    //		Input: 	division into which the line wil be 
    function displayline (localdiv, text){
    	$(localdiv).append("<h2>" + text + "</h2>");
    }

    // Set up loop, displays a charator with each loop
	for (var i=0; i < characters.length; i++){
		displayChar(i);
		}


	//  mouse click handler for chosing charators to play
	$(".characterBlocs").on("click", function(){
		console.log("click was " + this.value);
		if (myCharactor < 0){
			// on initial pick of my charactor
            myCharactor = this.value;
            console.log(myCharactor);
			displayline("#avalibleToFightBlock", "Enemies Available To Attack")
			for (var b=0; b < characters.length; b++){
				if (b != myCharactor){
        			console.log("trying to append " + characters[b].name);
					if (b == 0){
						$(avalibleToFightBlock).append($(".charactorRow0"));
					}
					if (b == 1){
						$(avalibleToFightBlock).append($(".charactorRow1"));
					}
					if (b == 2){
						$(avalibleToFightBlock).append($(".charactorRow2"));
					}
					if (b == 3){
						$(avalibleToFightBlock).append($(".charactorRow3"));
					}
				}
			$("#topMessage").text("My Character");
			$("#topPicBlock").append(characters[myCharactor]);
			}
			// build a box for game status messages
			$(topPicBlock).append("<div id='gameOverBlock'></div>");

		}
			// subsequent pick of fight charcter
			else{ if (fightCharactor >0){
					// we've fought before so remove the previously
					// defeated character
  	    			console.log("second time fighting " + characters[fightCharactor].name);

					if (fightCharactor == 0){
						$(".charactorRow0").remove();
					}
					if (fightCharactor == 1){
						$(".charactorRow1").remove();
					}
					if (fightCharactor == 2){
						$(".charactorRow2").remove();
					}
					if (fightCharactor == 3){
						$(".charactorRow3").remove();
					}
				}
				//	first time chosing a fight character
		      	fightCharactor = this.value;
   	    		console.log("first time fightinh " + characters[fightCharactor].name);
				if (fightCharactor == 0){
					$(fightBlock).append($(".charactorRow0"));
				}
				if (fightCharactor == 1){
					$(fightBlock).append($(".charactorRow1"));
				}
				if (fightCharactor == 2){
					$(fightBlock).append($(".charactorRow2"));
				}
				if (fightCharactor == 3){
					$(fightBlock).append($(".charactorRow3"));
				}
			}


			// displayline(".avalibleToFightrow", "Enemies Available To Attack")
			// for (var b=0; b < characters.length; b++){
			// 	if ((b != myCharactor) && (b != fightCharactor)){
			// 		displayChar(".avalibleToFightrow", b);
			// 		}
			// 		}			
			// displayChar(".fightRow", fightCharactor);

	});
    //	end chosing charators handler

    //
    // process an attack key press here
    //
    	// This function updates characters on the screen
    	//		Input:  target class
    	//				character to update
    function updateChar(localdiv, c){
		console.log("in displaychar curent charactor - " + characters[c].name);
        $(localdiv).append("<button class=" + characters[c].division + " characterBlocs' value=" + c + "><p>" + characters[c].name + "</p><p><img src=" + characters[c].src + " alt='some char' style='height: 120px; width: 140px'></p><p>" + characters[c].health + "</p></button>");
    }

    // attack button was pressed
    $(".button").on("click", function(){
    	// should we restart the game
    	// if(this.value == 9){
    	// 	playGame = false;
    	// 	}
  
		characters[fightCharactor].health = characters[fightCharactor].health - characters[myCharactor].attackPower;
		characters[myCharactor].attackPower = characters[myCharactor].attackPower + 6;
		
		// process a counter attack
		characters[myCharactor].health = characters[myCharactor].health - characters[fightCharactor].counterAttackPower;
		// characters[fightCharactor].attackPower = characters[fightCharactor].attackPower + 6;

		// this section writes the updated characters to the screen
		if (myCharactor == 0){
			$(".charactorRow0").remove();
			$("#gameOverBlock").remove();
		}
		if (myCharactor == 1){
			$(".charactorRow1").remove();
			$("#gameOverBlock").remove();
		}
		if (myCharactor == 2){
			$(".charactorRow2").remove();
			$("#gameOverBlock").remove();
		}
		if (myCharactor == 3){
			$(".charactorRow3").remove();
			$("#gameOverBlock").remove();
		}
		if (fightCharactor == 0){
			$(".charactorRow0").remove();
		}
		if (fightCharactor == 1){
			$(".charactorRow1").remove();
		}
		if (fightCharactor == 2){
			$(".charactorRow2").remove();
		}
		if (fightCharactor == 3){
			$(".charactorRow3").remove();
		}
		updateChar ("#topPicBlock", myCharactor);
		$(topPicBlock).append("<div id='gameOverBlock'></div>");
		updateChar ("#fightBlock", fightCharactor);

		// this section check to see if I lost
		if(characters[myCharactor].health < 1){
	    	$("#topMessage").text("You Lost, Sorry");
			var html = "<p>Would You Like To Play Again?</p>";
				document.querySelector("#gameOverBlock").innerHTML = html;
	    	$("#gameOverBlock").append("<div class='button btn btn-default' value='9'>Play Again</div>");


	    	// $("#topPicBlock").append("<div> class='col-md-8' id='topMessage' Would you like to play again?</div>");

			// $("#topPicBlock").append(characters[myCharactor]);
		}
		// This section checks to see if I won
		if(characters[fightCharactor].health < 1){
			wincount = wincount + 1;
			console.log("your win count is " + wincount);
			if (wincount < characters.length - 1){
				var html = "<h2>You Defeated " + characters[fightCharactor].name + "</h2>";
					document.querySelector("#topMessage").innerHTML = html;
				$("#topMessage").append("<h2>Choose Someone to Fight Next</h2>");
				}
				else{
			    	$("#topMessage").text("Congratulations, You Won");
					var html = "<p>Would You Like To Play Again?</p>";
						document.querySelector("#gameOverBlock").innerHTML = html;
	    			$("#gameOverBlock").append("<button class='button btn btn-default' value='9'>Play Again</button>");

				}
		}

	});	
    // end attack key press handling

//end game and start again
// }

// close document ready
});
