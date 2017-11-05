// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
    //set starting position to be off the left of the screen
    this.x = -101;

    //the y coordinate and speed are passed in as input parameters to the constructor
    this.y =  y;
    this.speed = speed;
    Resources.load([this.sprite]);
    //console.log("Trying to create an enemy");
    //console.log(this.x);
    //console.log(this.speed);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     

    //make sure the enemy bug isn't moving too slowly 
    if  (this.speed < 1) {
        this.speed = 3;
    }

    //Calculate a speed variance so the enemies have different speeds
    var speedVariance = this.speed * dt * (Math.random() * 50);
    //console.log("make the enemy move");
    //console.log(speedVariance);
    this.x += speedVariance;
    if (this.x > 500) {
        this.x = 0;
        this.y = this.newLocation();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// This method randomly selects a new row for the enemy to appear
// in once they're gone through the screen and reappear
//The possible options are found inside rowLocations array
Enemy.prototype.newLocation = function() {
    var rowLocations = [60, 140, 220];
    var random = rowLocations[Math.floor(Math.random() * rowLocations.length)];
    return random;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    //Set the image to be used as the character
    this.sprite = 'images/char-boy.png';
    //Set the number of lives they have
    this.playerLives = 5;
    console.log("number of player lives = ", this.playerLives);
    //Initialize starting score
    this.score = 0;
    //now use the reset function to put the character in the starting spot
    this.reset();
}

//Resets the player to the starting position
//Use when the player dies by touching a bug or
//when the player reaches the water
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 390;
};

//Updates the player's position once the player has reached the water
//It also adds points to the current score
Player.prototype.update = function() {
    //console.log("checking y value", this.y);
    if (this.y < 0) {
        console.log("You made it through! Congratulations!");
        this.score += 10;
        this.reset();
    }

    
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "32px Impact";
    //console.log("do I even get here?");
    ctx.fillText(("Score: " + this.score), 10, 100);
    ctx.fillText(("Lives: " + this.playerLives), 390, 100);
}

//Based on player input, moves the sprite around the screen within the bounds set
Player.prototype.handleInput = function(input) {
    //x increments are 101, y increments are 83
    switch (input) {
        case "left":
            if (this.x > 0) {
                this.x -= 101;
            }
            break;
        case "up":
            if (this.y > 50) {
                this.y -= 83;
            }
            break;
        case "right":
            if (this.x < 400) {
                this.x += 101;
            }
            break;
        case "down":
            if (this.y < 380) {
                this.y += 83;
            }
            break;
    }
    //handles movement
};

// Now instantiate your objects.
var enemy1 = new Enemy(60, (Math.random() * 10));
var enemy2 = new Enemy(140, (Math.random() * 10));
var enemy3 = new Enemy(220, (Math.random() * 10));

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3]
// Place the player object in a variable called player
var player = new Player();
//player.addScore();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    //console.log("Am I even in here?");
    player.handleInput(allowedKeys[e.keyCode]);
});
