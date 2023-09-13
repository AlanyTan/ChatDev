/*
This file contains the Game class that manages the game logic.
*/
// Import the necessary classes and functions
import { Snake } from './snake.js';
import { Food } from './food.js';
export class Game {
  constructor() {
    // Initialize the canvas and context
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d');
    // Set the initial game state
    this.snake = new Snake();
    this.food = new Food();
    this.score = 0;
    // Set the initial direction
    this.direction = 'right';
    // Bind the keydown event listener
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  start() {
    // Set the game loop interval
    this.interval = setInterval(this.update.bind(this), 100);
  }
  update() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Move the snake
    this.snake.move(this.direction);
    // Check for collision with the food
    if (this.snake.checkCollision(this.food)) {
      // Increase the score
      this.score += 10;
      // Generate new food
      this.food.generate();
      // Increase the snake's length
      this.snake.grow();
    }
    // Check for collision with the walls or itself
    if (this.snake.checkCollision(this.canvas) || this.snake.checkSelfCollision()) {
      // End the game
      this.end();
      return; // Add this line to exit the method after ending the game
    }
    // Draw the snake and food
    this.snake.draw(this.context);
    this.food.draw(this.context);
    // Draw the score
    this.context.fillStyle = 'white';
    this.context.font = '20px Arial';
    this.context.fillText('Score: ' + this.score, 10, 30);
  }
  end() {
    // Stop the game loop
    clearInterval(this.interval);
    // Show game over message
    this.context.fillStyle = 'white';
    this.context.font = '30px Arial';
    const textWidth = this.context.measureText('Game Over').width;
    this.context.fillText('Game Over', (this.canvas.width - textWidth) / 2, this.canvas.height / 2);
  }
  handleKeyDown(event) {
    // Change the direction based on the key pressed
    switch (event.key) {
      case 'ArrowLeft':
        if (this.direction !== 'right') {
          this.direction = 'left';
        }
        break;
      case 'ArrowUp':
        if (this.direction !== 'down') {
          this.direction = 'up';
        }
        break;
      case 'ArrowRight':
        if (this.direction !== 'left') {
          this.direction = 'right';
        }
        break;
      case 'ArrowDown':
        if (this.direction !== 'up') {
          this.direction = 'down';
        }
        break;
    }
  }
}