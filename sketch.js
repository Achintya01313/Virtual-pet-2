//Create variables here

var dog, happyDog,database, foodStock ;
var dogImage,happyDogImage;

function preload()
{
  dogImage = loadImage(img,"images/dogimg.png");
  happyDogImage = loadImage(img1,"images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  backGround(46 ,139 ,87)  
} 

function draw() {  
  drawSprites();
  //add styles
  dog = createSprite(202,220,13,13)
  dog.addImage(dogImage)  
  if(keyWentDown("UP_ARROW")){
    foodStock-=foodStock
    dog.addImage(happyDogImage)
  }
 }
