var sun;
var planet1, planet2, planet3, planet4, planet5;
var planet1_img, planet2_img, planet3_img, planet4_img, planet5_img, sun_img;
var scales,anglespeed,angles;

function preload(){
  planet1_img = loadImage("2.png");
  planet2_img = loadImage("2.png");
  planet3_img = loadImage("2.png");
  planet4_img = loadImage("2.png");
  planet5_img = loadImage("2.png");
  sun_img = loadImage("1.png");
}

function setup() {
  createCanvas(1400,1400);
  planet1 = createSprite(125,0,50,50);
  planet2 = createSprite(250,250,50,50);
  planet3 = createSprite(0,375,50,50);
  planet4 = createSprite(500,500,50,50);
  planet5 = createSprite(625,0,50,50);
  sun = createSprite(0,0,50,50);
  scales = 0.09;
  anglespeed = 0.2;
  angles = 0;
}

function draw() {
  background(0,0,255);  
  
  
  sun.addImage("sun",sun_img);
  sun.scale = scales;
  sun.setCollider("circle",0,0,280);
 

  planet1.addImage("planet1",planet1_img);
  planet1.scale=0.12;
  planet1.setCollider("circle",0,0,310);
  

  planet2.addImage("planet2",planet2_img);
  planet2.scale=0.1;  
  planet2.setCollider("circle",0,0,300);
  
  
  planet3.addImage("planet3",planet3_img);
  planet3.scale=0.05;  
  planet3.setCollider("circle",0,0,300);
  

  planet4.addImage("planet4",planet4_img);
  planet4.scale=0.06; 
  planet4.setCollider("circle",0,0,320);
   
  
  planet5.addImage("planet5",planet5_img);
  planet5.scale=0.04;
  planet5.setCollider("circle",0,0,350);
  
  angleMode(DEGREES);

  translate(width/2, height/2);
  rotate(angles);
  

  if (sun.collide(planet1)) {
    planet1.destroy();
   } 

   if (sun.collide(planet2)) {
    planet2.destroy();
   } 

   if (sun.collide(planet3)) {
    planet3.destroy();
   } 

  if (sun.collide(planet4)) {
   planet4.destroy();
  } 

  if (sun.collide(planet5)) {
    planet5.destroy();
   } 

  angles = angles + anglespeed;


  if (World.frameCount % 1 === 0){
   scales = scales + 0.001;
  }
  

 
  drawSprites();
}