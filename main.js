x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function  successCallback(){
  console.log("I got your image");
}

function failureCallback(){
  console.log("I failed to get your image");
}



function preload()
{
  apple =   loadImage("apple.png", successCallback, failureCallback);
  
}



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
console.log(event); 

content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
if(content == "one"){
  content = 1;
}else if(content == "two"){
  content = 2;
}else if(content == "three"){
  content = 3;
}else if(content == "four"){
  content = 4;
}else if(content == "five"){
  content = 5;
}else if(content == "six"){
  content = 6;
}else if(content == "seven"){
  content = 7;
}else if(content == "eight"){
  content = 8;
}else if(content == "nine"){
  content = 9;
}else if(content == "ten"){
  content = 10;
};
to_number = Number(content);
console.log(to_number)

if(Number.isInteger(to_number))
 {    
  document.getElementById("status").innerHTML = "Started drawing apple"; 
  draw_apple = "set";
 }
 else
 {
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
 }
}

function setup() 
{
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width, screen_height - 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples drawn";

    draw_apple = "";
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      console.log("I am here for " + i + "th time ");
      image(apple, x, y, 50, 50);
    }
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
