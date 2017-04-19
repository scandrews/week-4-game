$(document).ready(function() {

	var myCharactor = -1;
	var fightCharactor = -1;
	var a = -1;

	var characters = [
		yoda = {
			name: "yoda",
			src: "assets/images/yoda.jpg",
			health: 125,
			attackPower:150
		},

		darthmaul = {
			name: "Darthmaul",
			src: "assets/images/darthmaul.jpg",
			health: 100,
			attackPower:150
		},

		hansolo = {
			name: "Hansolo",
			src: "assets/images/hansolo.jpg",
			health: 115,
			attackPower: 150,
		},

		stormtrouper = {
			name: "Stormtrouper",
			src: "assets/images/stormtrouper.jpg",
			health: 90,
			attackPower: 150,
		}
	]

	// This function displays each charactor block
		// Input:   The division into which the charator is to be displayed
		//			The index of the charactor in the charators object
	function displayChar (localdiv, a){
		console.log("in displaychar curent charactor - " + characters[a].name);
        $(topPicBlock).append("<button class=" + localdiv + " value=" + a + "><p>" + characters[a].name + "</p><p><img src=" + characters[a].src + " alt='some char' style='height: 120px; width: 140px'></p><p>" + characters[a].health + "</p></button>");
    }

    function displayline (localdiv, text){
    	$(localdiv).append("<h2>" + text + "</h2>");
    }

    // Set up loop, displaying a charator with each loop
	// for (var i=0; i < characters.length; i++){
		displayChar("'charactorRow0 characterBlocs col-md-2'", 0);
		displayChar("'charactorRow1 characterBlocs col-md-2'", 1);
		displayChar("'charactorRow2 characterBlocs col-md-2'", 2);
		displayChar("'charactorRow3 characterBlocs col-md-2'", 3);
		// }

	//  mouse click handler for chosing charators to play
	$(".characterBlocs").on("click", function(){
		console.log("click was " + this.value);
		if (myCharactor < 0){
			// on initial pick of my charactor
            myCharactor = this.value;
            console.log(myCharactor);
//			displayline(".charactorRow", "My Character");
			displayline(".avalibleToFightrow", "Enemies Available To Attack")
			for (var b=0; b < characters.length; b++){
				if (b != myCharactor){
        			console.log("trying to append " + characters[b].name);
					if (b == 0){
						$(".avalibleToFightrow").append($(".charactorRow0"));
					}
					if (b == 1){
						$(".avalibleToFightrow").append($(".charactorRow1"));
					}
					if (b == 2){
						$(".avalibleToFightrow").append($(".charactorRow2"));
					}
					if (b == 3){
						$(".avalibleToFightrow").append($(".charactorRow3"));
					}
				}			
			$(".charrow").append(characters[myCharactor]);
			}
			}
			// subsequent pick of fight charcter
			else{
//				console.log("second click was " + this.value);
		      	fightCharactor = this.value;
        		console.log("trying to append " + characters[fightCharactor].name);
				if (fightCharactor == 0){
					$(".fightRow").append($(".charactorRow0"));
				}
				if (fightCharactor == 1){
					$(".fightRow").append($(".charactorRow1"));
				}
				if (fightCharactor == 2){
					$(".fightRow").append($(".charactorRow2"));
				}
				if (fightCharactor == 3){
					$(".fightRow").append($(".charactorRow3"));
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

    function updateChar(charToUpdate, localdiv, c){
		console.log("in displaychar curent charactor - " + characters[c].name);
        $(charToUpdate).append("<button class=" + localdiv + " value=" + c + "><p>" + characters[a].name + "</p><p><img src=" + characters[c].src + " alt='some char' style='height: 120px; width: 140px'></p><p>" + characters[c].health + "</p></button>");
    }


    $(".button").on("click", function(){
		console.log("click was " + this.value);
		characters[myCharactor].health = characters[myCharactor].health - 10;
		characters[fightCharactor].health = characters[fightCharactor].health + 10;
		$( ".topPicBlock" ).remove();
		console.log("in button click my character is " + myCharactor);
		console.log("in button click fight character is " + fightCharactor);
		updateChar(".charrow", ".topPicBlock", myCharactor);
				// for (var b=0; b < characters.length; b++){
				// 	if ((b != myCharactor) && (b != fightCharactor)){
				// 		displayChar(".avalibleToFightrow", b);
				// 		}
				// 	}			
		updateChar(".fightRow",  fightCharactor);
		});	





});
