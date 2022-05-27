img = "";
status = "";

function setup() {
 canvas = createCanvas(640,420);
 canvas.center();
 
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}
function preload() {
img = loadImage('dog_cat.jpg');    
}

function modelLoaded() {
console.log("model is loaded by Tejas.D");
status = true; 
objectDetector.detect(img, gotResults); 
}

function draw() {
image(img,0,0,640,420);
fill("#00ff00");
text("Dog",45,75);
noFill();
stroke("#ff0000");
rect(30,60,450,350);

fill("#00ff00");
text("Cat",320,150);
noFill();
stroke("#ff0000");
rect(300,90,270,320);
}

function gotResults(error,results) {
if (error) {
console.log(error);  
}
console.log(results);   
}