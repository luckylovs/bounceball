class Game{
constructor(){
  
}

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
    
    form = new Form();
    form.display();

}
ball1 = createSprite(100,200);
ball1.addAnimation("ball1",ball1Img)
ball1.scale = 0.3
ball2 = createSprite(300,200);
ball2.addAnimation("ball2",ball2Img)
ball2.scale = 0.3
ball3 = createSprite(500,200);
ball3.addAnimation("ball3",ball3Img)
ball3.scale = 0.3
ball4 = createSprite(700,200);
ball4.addAnimation("ball4",ball4Img)
ball4.scale = 0.3
balls = [ball1, ball2, ball3, ball4];


}

play(){
  form.hide();
  Player.getPlayerInfo();

    if(allPlayers !== undefined){
        var index = 0;
        background(rgb(198,135,103));
        image(track,0,-displayHeight*4,displayWidth, displayHeight*5);

        var x = 0;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
//position the cars a little away from each other in x direction
          x = x + 350;
          //use data form the database to display the balls in y direction
          y = displayHeight - allPlayers[plr].distance;
          balls[index-1].x = x;
          balls[index-1].y = y;


  
          if (index === player.index){
            balls[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = balls[index-1].y
          }
         
       
        }

    
    }


if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
  }

if(keyIsDown(38) && player.index !== null){
yVel+=0.9
if(keyIsDown(37)){
  xVel-=0.2
}
if(keyIsDown(39)){
  xVel+=0.2
}
}
  
if (frameCount % 20 === 0) {
  obstacles = createSprite(random(100, 1000), 0, 100, 100);
  obstacles.velocityY = 6;
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: obstacles.addImage("fire",fire_img);
      break;
      case 2: obstacles.addImage("slime", slime_img);
      break;
     
  }
  obstacleGroup.add(obstacles);
  
}

if(balls[index-1].isTouching(fire)){
  balls[index-1].addAnimation("fireball",fireball_img)
}
  
if(balls[index-1].isTouching(slime)){
  balls[index-1].addAnimation("slimeball",slimeball_img)
} 



  drawSprites();
}

end(){
  console.log("game end")
  
}

}
