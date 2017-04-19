$(document).ready(function() {

	var myCharactor = -1;
	var fightCharactor = -1;
	var a = -1;

	var characters = [
		yoda = {
			name: "yoda",
			src: "assets/images/yoda.jpg",
			health: 125,
			attackPower: 150,
			division: "'charactorRow0"
		},

		darthmaul = {
			name: "Darthmaul",
			src: "assets/images/darthmaul.jpg",
			health: 100,
			attackPower:150,
			division: "'charactorRow1"
		},

		hansolo = {
			name: "Hansolo",
			src: "assets/images/hansolo.jpg",
			health: 115,
			attackPower: 150,
			division: "'charactorRow2"
		},

		stormtrouper = {
			name: "Stormtrouper",
			src: "assets/images/stormtrouper.jpg",
			health: 90,
			attackPower: 150,
			division: "'charactorRow3"
		}
	]

	// This function displays each charactor block
		// Input:   The division into which the charator is to be displayed
		//			The index of the charactor in the charactors object
	function displayChar (a){
		console.log("in displaychar curent charactor - " + characters[a].name);
        $(topPicBlock).append("<button class=" + characters[a].division + " characterBlocs col-md-2' value=" + a + "><p>" + characters[a].name + "</p><p><img src=" + characters[a].src + " alt='some char' style='height: 120px; width: 140px'></p><p id='healthPar" + a + "'>" + characters[a].health + "</p></button>");
    }

    function displayline (localdiv, text){
    	$(localdiv).append("<h2>" + text + "</h2>");
    }

    // Set up loop, displaying a charator with each loop
	// for (var i=0; i < characters.length; i++){
		displayChar(0);
		displayChar(1);
		displayChar(2);
		displayChar(3);
		// }

	//  mouse click handler for chosing charators to play
	$(".characterBlocs").on("click", function(){
		console.log("click was " + this.value);
		if (myCharactor < 0){
			// on initial pick of my charactor
            myCharactor = this.value;
            console.log(myCharactor);
//			displayline(".charactorRow", "My Character");
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
			$("#topPicBlock").append(characters[myCharactor]);
			}
			}
			// subsequent pick of fight charcter
			else{
//				console.log("second click was " + this.value);
		      	fightCharactor = this.value;
        		console.log("trying to append " + characters[fightCharactor].name);
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
        $(localdiv).append("<button class=" + characters[c].division + " characterBlocs col-md-2' value=" + c + "><p>" + characters[c].name + "</p><p><img src=" + characters[c].src + " alt='some char' style='height: 120px; width: 140px'></p><p>" + characters[c].health + "</p></button>");
    }

    // process an attack key press here
    $(".button").on("click", function(){
		console.log("button click was " + this.value);
		characters[myCharactor].health = characters[myCharactor].health - 10;
		characters[fightCharactor].health = characters[fightCharactor].health - 10;
		console.log("in button click my character is " + myCharactor);
		console.log(characters[myCharactor].health);
		console.log(characters[fightCharactor].health);
		console.log("in button click fight character is " + fightCharactor);

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


	});	
    // end attack key press handling



// close document ready
});
