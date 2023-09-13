/*
This file contains the Food class that represents the food in the game.
*/
export class Food {
  constructor() {
    // Set the initial position of the food
    this.x = Math.floor(Math.random() * 20);
    this.y = Math.floor(Math.random() * 20);
  }
  generate() {
    // Generate new random position for the food
    this.x = Math.floor(Math.random() * 20);
    this.y = Math.floor(Math.random() * 20);
  }
  draw(context) {
    // Draw the food
    context.fillStyle = 'red';
    context.fillRect(this.x * 20, this.y * 20, 20, 20);
  }
}