/*
This file contains the Snake class that represents the snake in the game.
*/
export class Snake {
  constructor() {
    // Set the initial position and length of the snake
    this.body = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    // Set the initial velocity of the snake
    this.velocity = 1;
  }
  move(direction) {
    // Get the head of the snake
    const head = { ...this.body[0] };
    // Update the position of the head based on the direction
    switch (direction) {
      case 'up':
        head.y -= this.velocity;
        break;
      case 'down':
        head.y += this.velocity;
        break;
      case 'left':
        head.x -= this.velocity;
        break;
      case 'right':
        head.x += this.velocity;
        break;
    }
    // Add the new head to the beginning of the body
    this.body.unshift(head);
    // Remove the tail of the snake
    this.body.pop();
  }
  checkCollision(object) {
    // Check if the snake collides with the given object
    return this.body.some((segment) => segment.x === object.x && segment.y === object.y);
  }
  checkSelfCollision() {
    // Check if the snake collides with itself
    const [head, ...body] = this.body;
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  }
  grow() {
    // Add a new segment to the snake's body
    const tail = { ...this.body[this.body.length - 1] };
    this.body.push(tail);
  }
  draw(context) {
    // Draw each segment of the snake
    this.body.forEach((segment) => {
      context.fillStyle = 'green';
      context.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
  }
}