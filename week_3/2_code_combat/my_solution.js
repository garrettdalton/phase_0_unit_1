// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 //Rescue Mission

 //move down 2
 //move right
 //move up 2
 // move right 2
 //move down
 //attack
 this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom

//move up
//move right
//move left
//move up
//attack
this.moveUp();

this.moveRight();

this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

//Drink Me

//move right
//attack
//move down
//move up
//move right
//attack
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards

//move right 2
//move up
//move right
//say taunt
//move down
//move right
//move up
//move right
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There!");
 this.moveDown();
 this.moveRight();
 this.moveUp();
 this.moveRight();

 //It's a Trap!

 //move down2
 //say taunt
 //move up2
 this.moveDown();
this.moveDown();
this.say("hey there!");
this.moveUp();
this.moveUp();

//taunt

//say taunt 3
this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey you sunofabitch!");
this.say("dickface!");
this.say("wiener!");

//cowardly taunt

//move (near ogres)
//say taunt
//move (70,10)
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.

// Say something!

// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinates.
this.moveXY(59,37);
this.say("dickweeds!");
this.moveXY(70,10);

//Commanding Followers

//say follow
// move (near ogres)
// say attack
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow me!");
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(57,38);
// Make sure Tharin is safe!
this.say("ATTACK!");

//Mobile Artillery

//move near (ogre pack 2)
//attack (xy ogres)
//move near (ogre pack 3)
//attack (xy ogres)
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(60,36);
this.attackXY(70,56);
this.attackXY(65,45);

this.moveXY(51,41);
this.attackXY(50,66);
this.attackXY(50,52);

//RELEASE 3

// The 'this' Is referring to the object whose scope you are currently in

// the '()' is a way to pass parameters to a function

// the semicolons are basically finishing a command.  Each semicolon denotes the end of a command/statement given to the terminal



 
 
 
 
 
 
// // Reflection:
// What parts of your strategy worked? What problems did you face?
// The strategy was pretty straightforward, use pseduocode to plan and then implement it in javascript

// What questions did you have while coding? What resources did you find to help you answer them?
// //The main question I had was what this. was accomplishing, I figured it out by searching around on google.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// //Most of the concepts seemed easy to me, I think I figured out about halfway through the campaign that each unit was an object

// Did you learn any new skills or tricks?
// //just javascript syntax

// How confident are you with each of the Learning Competencies?
// //100%

// Which parts of the challenge did you enjoy?
// //The game concept was fun, but somewhat slow.
// Which parts of the challenge did you find tedious? 
//The whole campaign was a bit tedious just because it took so long.  Also pseudocode for this was good practice but took up time
