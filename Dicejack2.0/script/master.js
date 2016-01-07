"use strict";

function userInput(){
	var namePrompt;
	namePrompt = prompt ("Enter your name", "");
     inputCheck(namePrompt)
    return namePrompt;
}
function inputCheck(namePrompt){
        if (namePrompt.length > 0)
        	{return namePrompt;
        } else if (namePrompt.length === 0)
            {userInput();};	
}

function randomDiceRoll()
{
	var num=Math.floor((Math.random() * 10) + 1);
	return num;

}

function dealersTurn(dealer){
	while (dealer < 17) {
	var roll;
	roll = randomDiceRoll();
	dealer += roll;
	console.log("Dealer rolls and now has ",dealer);
}
if (dealer > 20) {
		console.log("Dealer has", dealer,"dealer bust!  You win!");
		rePlay()
	} else{ return dealer;}
};

function rePlay(){
    var play;
    play = prompt ("Do you want to play again? yes or no");
        if (play === "yes") {
        	main()
        }else if (play === "no"){
        	console.log("Thank you for playing ");
        };
}

function main(){
var player;
var player1;
var dealer;
var dealerTotalRoll;
var hit;
var rollAgainMessage;
var total;

player1 = userInput();
rollAgainMessage = "Would you like to roll again? yes or no ";

player = 0
dealerTotalRoll = 0
dealer = 0


	total=randomDiceRoll()+randomDiceRoll();
	console.log("Your first two rolls come out to " + total);
	player = total;

	while (player < 20){
		hit = prompt(rollAgainMessage);
	    if (hit==="yes")
	    {
	    	player += randomDiceRoll();
		console.log(player1 ,"now has", player);	    	
	    }
	    if (hit==="no")
	    {
	    	console.log(player1, "stays with ",player);
	    	break;
	    }}
if (player > 20) {
	console.log(player1, " bust with", player, "!  You LOSE!");
	rePlay()
	    } else	{dealer = dealersTurn(dealer);
	    	};

	    	if (dealer >= player){
	    		console.log("Dealer wins!");
	    		rePlay()
	    	}else if(player > dealer && player < 21)
	    		{console.log("YOU WIN!");
	    		rePlay()
};
}

main();

