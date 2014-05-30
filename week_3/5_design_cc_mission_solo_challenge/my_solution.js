// This is a solo challenge

// Your mission description:
// You awake in a dusty, cold stone room.  The last thing you remember is laying down to sleep by the campfire.
// As you shake your head to clear your head you notice a rusty iron gate closed over the exit to the room.
// You struggle to stand on your feet and grab the iron gate.  The ancient hinges groan loudly and the gate breaks
// free of the stone wall.  As you stumble into a long corridor lit by the light of a torch on the wall,
// your foot brushes something in the darkness. The skeletal remains of something unidentifiable reaches
// out towards a short sword on the floor.  You grab the sword and the torch from the wall, and steel your nerves
// as you take one step towards what you hope is the way out...
// 
// 

// Pseudocode
// Make object character with properties: health, dmg, xposition, yposition, key, flesh and set accordingly
// Make object rat with properties: health, dmg, xposition, yposition and set accordingly
// Make object slime with properties: health, dmg, xposition, yposition and set accordingly
// Make object skelly with properties: health, dmg, xposition, yposition, hostile and set accordingly
// Make functions for move and attack and run engine function after each use
// Make engine function which checks for various conditions to progress the game
// [Included in Engine] Checks: if character health =0, if character position is in front of monster; if monsters health is 0,
//              if character's position matches locked room.
// Nest inside monster health checks key update for rat and ring update for slime.
// Nest inside skelly health check output that you have won the game.
// Make user action function to prompt user to move action forware
// Initial Code
var character = {
	health : 10,
	dmg: 2,
	xposition: 0,
	yposition: 5,
	key: false,
	flesh: false,
}

var rat = {
	health : 4,
	dmg 1,
	xposition: 3,
	yposition: 2,
}

var slime = {
	health : 8,
	dmg 1,
	xposition: 5,
	yposition: 8,
}

var skelly = {
	health : 10,
	dmg : 2,
	xposition 9,
	yposition 5,
	hostile: true,
}
function action(input){
	window.prompt("What is your action?");
}

function move(direction) {
	if (dir.toLowerCase() === "up") {
		character.yposition += 1;
	} else if (dir.toLowerCase() === "down") {
		character.yposition -= 1;
	} else if (dir.toLowerCase() === "left") {
		character.xposition -= 1;
	} else if (dir.toLowerCase() === "right") {
		character.xposition += 1;
	}
	engine();
}

function attack (self, target) {
	if (self === character){
		target.health -= self.dmg;
		self.health -= target.dmg;
	} else {
		target.health -= self.dmg;
	}
	engine();
}

function engine() {
	if (character.health < 1) {
		console.log ("You have been slain.  Restart?")
	}else if (math.abs((character.yposition + character.xposition) -(rat.yposition + rat.xposition)) < 2 ){
		if (rat.health > 0){
		console.log ("A rat jumps out at you!");
		attack(rat, character);
		action();
		}else if (rat.health < 1){
			Console.log ("You have slain the rat! You find a key in its burrow."):
			character.key =true;
			action();
		}
	}else if (math.abs((character.yposition + character.xposition) -(slime.yposition + slime.xposition)) < 2 ){
		if (slime.health > 0){
		console.log ("A slime beings to attack you!");
		attack(slime, character);
		action();
		}else if (slime.health < 1){
			Console.log ("You have slain the slime! You reach into its gelatinous mass and find a magic ring! As you put it on you feel stronger and your wounds heal!");
			character.health = 10;
			character.dmg += 1;
			action();
		}
	}else if (math.abs((character.yposition + character.xposition) -(skelly.yposition + skelly.xposition)) < 2 ){
		  if (skelly.health > 0){
			if (character.flesh = true ){
				console.log ("A skeleton with fiery eyes leaps out at you!  It hesitates as its eyes focus on the large knapsack full of fleshy stuff on your back.
							  After much gesturing, you give the skeleton the grisly knapsack and he pulls the flesh over his head.  Before your eyes he becomes a human!
							   He gestures you to follow, and leads you out of the dungeon to your freedom!");
								exit program;
			}else{
				console.log ("A skeleton with fiery eyes leaps out and attacks!");
				attack(skelly, character);
				action();
	  	  }else if (skelly.health < 1){
			Console.log ("You have slain the skeleton! In the corridor beyond you can see light emanating from outside and smell fresh air!  You take the first step towards your freedom...")
			exit program;
			}

		}else if ((character.yposition + character.xposition = 14) && (character.key = true;)){
			console.log("You see a small door with a lock.  You use the key you found to open the door which reveals a weapons rack with several old swords.
						  One sword in particular glows with faint light, and as you pick it up you can feel power emanating from it.")
			character.dmg += 1;
			action();

		}else {
			console.log("You take another step forward in the dungeon")
			action();
		}

}

// Refactored Code

//The main changes I made were to delete some uneccesary health checks. I didn't need to specify that the monster health was lower
// than 1 since I already checked if it was greater than 0.  So I basically got rid of a couple else ifs and made them else's.
//Otherwise I would say the code is both concise and clear, the only issue being that I could wrap the object creation into a class (not sure how to yet)
// and that my engine code looks sloppy with so many if/else's (I don't know how I would clean that up).

var character = {
	health : 10,
	dmg: 2,
	xposition: 0,
	yposition: 5,
	key: false,
	flesh: false,
}

var rat = {
	health : 4,
	dmg 1,
	xposition: 3,
	yposition: 2,
}

var slime = {
	health : 8,
	dmg 1,
	xposition: 5,
	yposition: 8,
}

var skelly = {
	health : 10,
	dmg : 2,
	xposition 9,
	yposition 5,
	hostile: true,
}
function action(input){
	window.prompt("What is your action?");
}

function move(direction) {
	if (dir.toLowerCase() === "up") {
		character.yposition += 1;
	} else if (dir.toLowerCase() === "down") {
		character.yposition -= 1;
	} else if (dir.toLowerCase() === "left") {
		character.xposition -= 1;
	} else if (dir.toLowerCase() === "right") {
		character.xposition += 1;
	}
	engine();
}

function attack (self, target) {
	if (self === character){
		target.health -= self.dmg;
		self.health -= target.dmg;
	} else {
		target.health -= self.dmg;
	}
	engine();
}

function engine() {
	if (character.health < 1) {
		console.log ("You have been slain.  Restart?")
	}else if (math.abs((character.yposition + character.xposition) -(rat.yposition + rat.xposition)) < 2 ){
		if (rat.health > 0){
		console.log ("A rat jumps out at you!");
		attack(rat, character);
		action();
		}else {
			Console.log ("You have slain the rat! You find a key in its burrow."):
			character.key =true;
			action();
		}
	}else if (math.abs((character.yposition + character.xposition) -(slime.yposition + slime.xposition)) < 2 ){
		if (slime.health > 0){
		console.log ("A slime beings to attack you!");
		attack(slime, character);
		action();
		}else {
			Console.log ("You have slain the slime! You reach into its gelatinous mass and find a magic ring! As you put it on you feel stronger and your wounds heal!");
			character.health = 10;
			character.dmg += 1;
			action();
		}
	}else if (math.abs((character.yposition + character.xposition) -(skelly.yposition + skelly.xposition)) < 2 ){
		  if (skelly.health > 0){
			if (character.flesh = true ){
				console.log ("A skeleton with fiery eyes leaps out at you!  It hesitates as its eyes focus on the large knapsack full of fleshy stuff on your back.
							  After much gesturing, you give the skeleton the grisly knapsack and he pulls the flesh over his head.  Before your eyes he becomes a human!
							   He gestures you to follow, and leads you out of the dungeon to your freedom!");
								exit program;
			}else{
				console.log ("A skeleton with fiery eyes leaps out and attacks!");
				attack(skelly, character);
				action();
	  	  }else {
			Console.log ("You have slain the skeleton! In the corridor beyond you can see light emanating from outside and smell fresh air!  You take the first step towards your freedom...")
			exit program;
			}

		}else if ((character.yposition + character.xposition = 14) && (character.key = true;)){
			console.log("You see a small door with a lock.  You use the key you found to open the door which reveals a weapons rack with several old swords.
						  One sword in particular glows with faint light, and as you pick it up you can feel power emanating from it.")
			character.dmg += 1;
			action();

		}else {
			console.log("You take another step forward in the dungeon")
			action();
		}

}





// Reflection
// What parts of your strategy worked? What problems did you face?
// I didn't really face any problems.  The main challenge here was that I think I dreamt to big for a simple assignment.  The pseudocoding definitely helped me to start
// coding correctly.

// What questions did you have while coding? What resources did you find to help you answer them?
// I refrenced the intro to javascript a LOT during this assignment.  Mainly to look up syntax for diffrent loops and stuff.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// The concept I had the most trouble with was that I couldn't really test my code to see if it would work. I'm not even sure if ANY of it works.

// Did you learn any new skills or tricks?
// I learned a bit about how crazy nesting can get. But nothing all that new.

// How confident are you with each of the learning objectives?
// The first two I am very confident on, I didn't attempt the bonus objective.

// Which parts of the challenge did you enjoy?
//I enjoyed this challenge thouroughly.  The reason I am interested in computer science is because of my love for videogames, so making a moc game level was tons of fun.

// Which parts of the challenge did you find tedious?
// It got tedious during my engine function.  I don't think I realized how big I was shooting for with my concept in the beginning.
// 
// 
// 
// 
// 
// 