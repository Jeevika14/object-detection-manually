img="";

Status= "";

function preload()
{
    img= loadImage('dog_cat.jpg');
}

function setup()
{
    canvas= createCanvas(640, 420);
    canvas.center()

    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "status: Detecting objects"; 
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 83, 56);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat",286, 84);
    noFill();
    stroke("#FF0000");
    rect(60, 90, 550, 450);
}

function modelLoaded()
{
    console.log('model Loaded');
    Status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}