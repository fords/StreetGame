// Enemies that attack the player
var Enemy = function(x,y) {
    this.x = x
    this.y = y
    this.sprite = 'images/enemy-bug.png'
    this.height = 60
    this.width = 90
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += 150 * dt;
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
    this.height = 70
    this.width = 65
}




//handleInput()  update(), render() method.

Player.prototype.handleInput = function(direction){
    if ( direction === 'up' && this.y - 10 > 0){
        this.y -= 85
    } else if (direction === 'down' && this.y + 250 <= ctx.canvas.height){
        this.y += 85
    } else if (direction === 'right' && this.x + 105 < ctx.canvas.width){
        this.x += 100
    } else if (direction === 'left' && this.x - 100 >= 0){
        this.x -= 100
    }
}

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