let leftArrow = false;
let rightArrow = false;
let topArrow = false;
let belowArrow = false;
let speed = 30;
class Hero{
    image;
    top ;
    left ;
    size ;
    constructor(image,top,left,size) {
        this.left = left;
        this.top = top;
        this.size = size;
        this.image = image;
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    setSpeed(a){
        speed = a;
    }
    moveRight(){
        this.left += speed;
        console.log("phai")
    }
    moveLeft(){
        this.left -= speed;
        console.log("trai")
    }
    moveTop(){
        this.top -= speed;
        console.log("tren")
    }
    moveBelow(){
        this.top += speed;
        console.log("duoi")
    }
    move(){
        if(leftArrow && this.left > 0){
            this.moveLeft();
        }
        else if(rightArrow && this.left + this.size < window.innerWidth){
            this.moveRight();
        }
        else if(topArrow && this.top > 0){
            this.moveTop();
        }
        else if(belowArrow && this.top + this.size < window.innerHeight){
            this.moveBelow();
        }
    }
}
window.onload = EventKeyboad;
function EventKeyboad(){
    document.addEventListener("keydown",function (event){
        if(event.keyCode ==37){
            leftArrow = true;
        }
        else if(event.keyCode == 39){
            rightArrow = true;
        }
        else if(event.keyCode == 38){
            topArrow = true;
        }
        else if(event.keyCode == 40) {
            belowArrow = true;
        }
    })
    document.addEventListener("keyup",function (event){
        if(event.keyCode ==37){
            leftArrow = false;
        }
        else if(event.keyCode == 39){
            rightArrow = false;
        }
        else if(event.keyCode == 38){
            topArrow = false;
        }
        else if(event.keyCode == 40){
            belowArrow = false;
        }

    })
}
var hero = new Hero('pikachu.png', 20, 30, 200);
function start(){
    hero.move();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(start)
}
start();