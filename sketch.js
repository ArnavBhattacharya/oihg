var database;
var form;
var form_img;
var playerCount = 0;
var gameState = 0;
var player;
var allPlayers;
var startSound;

function preload()
{
  form_img = loadImage("background.jpg");
  startSound = loadSound("Tobu - Life.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();

  startSound.play();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {

  background(form_img);
  
  // form.display();

  if(playerCount === 1){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

}