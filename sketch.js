var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var balls,ball1,ball2,ball3,ball4;
var ball1Img,ball2Img,ball3Img,ball4Img;
var fireball,slimeBall,slime,fire,coin;
var obstacleGroup,fire_img,slime_img,slimeball_img,fireball_img;
var backgroundImage;

function preload(){
  ball1Img = loadAnimation("images/Soccerball.png","images/Soccerball1.png","images/Soccerball2.png")
  ball2Img = loadAnimation("images/Basketball.png","images/Basketball1.png","images/Basketball2.png")
  ball3Img = loadAnimation("images/volleyball.png","images/volleyball1.png","images/volleyball2.png")
  ball4Img = loadAnimation("images/woodenball.png","images/woodenball1.png","images/woodenball2.png")
  track = loadImage("road.png");
  fireball_img = loadAnimation("images/Fireball.png","images/Fireball1.png","images/Fireball2.png");
  slimeball_img = loadAnimation("images/Slime Ball.png","images/Slime Ball1.png","images/Slime Ball2.png");
  fire = loadImage("images/fire.png")
  slime = loadImage("images/slime.png")
  coin = loadImage("images/coin.png")
}

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    xVel = 0;
    yVel = 0

    for(i=0;i<5;i++)
    {
      w=random(200,950);
      h=random(-height*4,height-300);
    obstacles = createSprite(w,h);
    obstacles.addImage("obstacles",obstacles);
    obstacles.add(obstacleGroup);
   }

  }
  
  
  function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }

     
    if(gameState === 2){
      game.end();
    }
}