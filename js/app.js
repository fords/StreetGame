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
    
    if(this.x > ctx.canvas.width + this.width){
        this.x = -200 * Math.floor(Math.random() * 4) + 1
    } else {
        this.x += 150 * dt
    }

    let xDist = player.x - this.x 
    let yDist = player.y - this.y 
    let distance = Math.sqrt( xDist * xDist + yDist * yDist)
    // Check if there is collision 
    if ( distance < 65) {
        if (player) {
            player.x = 202
            player.y = 400
        }
    } 
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
// handleInput() checks the keypad instruction for the player's direction movement 
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

// Render player
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

// Check player wins the game
Player.prototype.update = function(dt){
    
    if ( !isGameOver && player.y < 50 ){
        isGameOver = true
        console.log('player won the game!')
        allEnemies = []
    }
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
// isGameOver
var isGameOver = false
// enemyPosition in Y axis
const enemyPosition = [55, 140 ,230]
// Player start position
const player = new Player(202, 400 ,'images/char-boy.png' )

// All enemies position calculation
var allEnemies = enemyPosition.map((y, index) => {
    return new Enemy( (-200 * (index + 1)), y)
})