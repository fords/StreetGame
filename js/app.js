// Enemies that attack the player
var Enemy = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/enemy-bug.png'
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
};

// player class
var Player = function(x, y, sprite){
    this.x = x
    this.y = y
    this.sprite = 'images/char-boy.png'
}


//update(), render() and handleInput() method.
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.update = function(dt){

}

// Eventlistener listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode])
});

const enemyPosition = [55, 140 ,230]

const player = new Player(202, 400 ,'images/char-boy.png' )

const allEnemies = enemyPosition.map((y, index) => {
    return new Enemy( (-200 * (index + 1)), y)
})