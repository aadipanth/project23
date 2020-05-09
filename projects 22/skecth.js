const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var platform;


function preload() {
    
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform = new Ground(150, 305, 300, 170);

    box =new box(mouse.x,mouse.y,40,30);
    
} 

function draw(){
    
    Engine.update(engine);
    
    
    
    platform.display();   
}
function mouseClicked(){
    if(keycode===32){
    box.display();
    }
}