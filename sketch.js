var hypnoticBall, database;
var position;
var form
var player
var game

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()
  
}

function draw(){
  background("white");
  
    drawSprites();
  
}

