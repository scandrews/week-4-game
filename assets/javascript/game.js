$(document).ready(function() {

	var myCharactor = -1;
	var fightCharactor = -1;
	var a = -1;

	var characters = [
		yoda = {
			name: "yoda",
			src: "assets/images/yoda.jpg",
			health: 125,
			attackPower: 15,
			counterAttackPower: 18,
			division: "'charactorRow0"
		},

		darthmaul = {
			name: "Darthmaul",
			src: "assets/images/darthmaul.jpg",
			health: 100,
			attackPower:12,
			counterAttackPower: 10,
			division: "'charactorRow1"
		},

		hansolo = {
			name: "Hansolo",
			src: "assets/images/hansolo.jpg",
			health: 115,
			attackPower: 10,
			counterAttackPower: 12,
			division: "'charactorRow2"
		},

		stormtrouper = {
			name: "Stormtrouper",
			src: "assets/images/stormtrouper.jpg",
			health: 90,
			attackPower: 7,
			counterAttackPower: 5,
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

	$(topPicBlock).append("<button id='gameOverBlock'></button>");

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

    	// This function updates characters on the screen
    	//		Input:  target class
    	//				character to update
    function updateChar(localdiv, c){
		console.log("in displaychar curent charactor - " + characters[c].name);
        $(localdiv).append("<button class=" + characters[c].division + " characterBlocs' value=" + c + "><p>" + characters[c].name + "</p><p><img src=" + characters[c].src + " alt='some char' style='height: 120px; width: 140px'></p><p>" + characters[c].health + "</p></button>");
    }

    // process an attack key press here
    $(".button").on("click", function(){
		characters[fightCharactor].health = characters[fightCharactor].health - characters[myCharactor].attackPower;
		characters[myCharactor].attackPower = characters[myCharactor].attackPower + 6;
		
		// process a counter attack
		characters[myCharactor].health = characters[myCharactor].health - characters[fightCharactor].counterAttackPower;
		// characters[fightCharactor].attackPower = characters[fightCharactor].attackPower + 6;

		// this section writes the updated characters to the screen
		if (myCharactor == 0){
			$(".charactorRow0").remove();
		}
		if (myCharactor == 1){
			$(".charactorRow1").remove();
		}
		if (myCharactor == 2){
			$(".charactorRow2").remove();
		}
		if (myCharactor == 3){
			$(".charactorRow3").remove();
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
		updateChar ("#fightBlock", fightCharactor);

		// this section check for a loser

		if(characters[myCharactor].health < 1){
	    	$("#topMessage").text("You Lost, Sorry");

			var html = "<p>Would You Like To Play Again?</p>";
				document.querySelector("#gameOverBlock").innerHTML = html;


	    	// $("#topPicBlock").append("<div> class='col-md-8' id='topMessage' Would you like to play again?</div>");
	    	$("#gameOverBlock").append("<button class='button btn btn-default' value='9'>Play Again</button>");

			// $("#topPicBlock").append(characters[myCharactor]);
		}
		if(characters[fightCharactor].health < 1){
			var html = "<h2>You Defeated</h2>" + characters[fightCharactor].name;
				document.querySelector("#topMessage").innerHTML = html;
			$("#topMessage").append("<h2>Choose Someone to Fight Next</h2>");

		}

	});	
    // end attack key press handling



// close document ready
});
