var spaceBgImg, sc1, sc2, sc3, sc4, ss;
var iss, spacecraft, hasDocked;
hasDocked = false;
var dockingPoint;


function preload(){
  spaceBgImg = loadImage("spaceBg.jpg");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");
  ss = loadImage("iss.png")
}

function setup() {
  
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(ss);
  spacecraft = createSprite(400, 400, 50, 50);
  dockingPoint = createSprite(333, 236, 2, 2);
  spacecraft.addImage(sc1);
  spacecraft.scale=0.1;

}

function draw() {
  background(spaceBgImg);
  if(!hasDocked){
    

    if(keyDown("up")){
      spacecraft.addImage(sc2);
      spacecraft.y-=1;
    }else if(keyDown("down")){
      spacecraft.addImage(sc1);
      spacecraft.y+=1;
    }else if(keyDown("right")){
      spacecraft.addImage(sc3);
      spacecraft.x+=1;
    }else if(keyDown("left")){
      spacecraft.addImage(sc4);
      spacecraft.x-=1;
    }else{
      spacecraft.addImage(sc1);
    }
    if(spacecraft.isTouching(dockingPoint)){
      hasDocked=true;
    }
  }else{
    fill("white");
    textSize(20);
    text("Docking Successful", 50, 50);
    
  }
  
  drawSprites();
}