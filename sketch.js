function setup() {
createCanvas(1200,600);
background (255);
    var words = [ "1", "2", "3", "4" ];
var word = random(words);   
}

function draw() {

//var words = [ "1", "2", "3", "4" ];
//var word = random(words);
    
    //left rectangle
    if(mouseX < 600){
        noStroke();
        fill(233, 255, 0);
        rect(0, 0, 600, 600);
        stroke(0);
        noFill();
        textSize(200);
        text("back", mouseX-200, mouseY);
        
        noStroke();
        fill(0);
        rect(600, 0, 600, 600); 
    }
        if(mouseIsPressed &&
        mouseX < 600){
        noStroke();
        fill(0);
        rect(0, 0, 600, 600);
        stroke(233, 255, 0);
        noFill();
        textSize(200);
        text("back", mouseX-200, mouseY);  
       
        noStroke();
        fill(233, 255, 0);
        rect(600, 0, 600, 600);    
        
    }   
    
    
    //right rectangle
        
    if (mouseX > 600){
        noStroke();
        fill(0);
        rect(600, 0, 600, 600);
        stroke(233, 255, 0);
        noFill();
        textSize(200);
        text("forth", mouseX-200, mouseY)
        
        noStroke();
        fill(233, 255, 0);
        rect(0, 0, 600, 600);
    }
    if (mouseIsPressed &&
            mouseX > 600){
            noStroke();
            fill(233, 255, 0);
            rect(600, 0, 600, 600);
            stroke(0);
            noFill();
            textSize(200);
            text("forth", mouseX-200, mouseY); 
        
        noStroke();
        fill(0);
        rect(0, 0, 600, 600);
    }
 

  

}
