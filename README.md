frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

To play the game: 

First, open a browser session (I prefer chrome, but I've tested on Firefox and Internet Explorer), and navigate to the main folder where the index.html file exists. Make sure this file path is reflected in the address bar of the browser and you should be able to start playing the game. 

Use the arrow keys on the keyboard to move the character past the bugs and into the water. It is set up so you have 5 lives during the game, which is indicated at the top of the screen. Each time you make it across, you get 10 points. And if you get hit by a bug, you lose 10 points. 

Code changes:
I made changes to the engine.js file to include checking for a collision between the bug and character. This is also where I increment the score and number of lives, which are properties of the player object. 

The changes to the app.js are the methods for the behavior of the objects, the charcter and the enemy. 

I researched a lot of existing code while working on this project, and implemented certain pieces of existing code with some changes after I fully understood how the code behaved. Some of the github accounts where I viewed existing code are: 

jeanpan
knaguilar

