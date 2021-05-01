var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "white";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "deeppink";

    block3 = createSprite(490,580,200,30);
    block3.shapeColor = "cyan";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 30,30);
    ball.shapeColor = "black";
    //write code to add velocityX and velocityY
     ball.velocityX = 1;
     ball.velocityY = 2.5;
}

function draw() {
    background("grey");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "white";
        music.play();
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "deeppink";
       
        //write code to set velocityX and velocityY of ball as 0
         ball.velocityX = 0;
         ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "cyan";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }
    if(ball.y<0){
    music.stop();
    }
    
    drawSprites();
}
