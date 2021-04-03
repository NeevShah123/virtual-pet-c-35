var dog, happydog, foodS, foodStock;
var dogimg, happydogimg;
var database;


//Create variables here

function preload()
{
dogimg = loadImage("Sprites/dogImg.png");
happydogimg = loadImage("Sprites/dogImg1.png");

  //load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,20,20);
  dog.addImage(dogimg);
  database = firebase.database;
  foodStock = database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() { 
  background(46, 139, 87);

  drawSprites();
  //add styles here

}



