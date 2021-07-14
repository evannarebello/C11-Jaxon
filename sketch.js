var Jaxon , Jaxon_running;
var path , pathImage;
var invs_path_l,invs_path_r;

function preload(){
  Jaxon_running = loadAnimation("Runner-1.png",
                                "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  //creating canvas
  createCanvas(400,400);
  
  //creating background
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.scale = 1.2;
  
  //creating Jaxon
  Jaxon = createSprite(200,350,50,80);
  Jaxon.addAnimation("running", Jaxon_running);
  Jaxon.scale = 0.05;
  Jaxon.x = 200;

  //invisible sides
  invs_path_l  = createSprite(10,200,60,400);
  invs_path_l.visible = false;
  invs_path_r  = createSprite(390,200,60,400);
  invs_path_r.visible = false;

  
}

function draw() {

  background(255);

  path.velocityY= 4;
  
  //moving jaxon with the mouse
  Jaxon.x = mouseX

  Jaxon.collide(invs_path_l);
  Jaxon.collide(invs_path_r);

  //repeating the background
  if(path.y > 400 ){
    path.y = height/2;
   }

  drawSprites();

}
