const cvs = document.getElementById("myCanvas")
const ctx = cvs.getContext("2d");
let diem = document.getElementById("diem")
let tocdo = document.getElementById("tocdo")
let leftArrow = false;
let rightArrow = false;
let topArrow = false;
let belowArrow = false;
let speed = 10;
let checkspeed = false;

const anh1 = new Image();
anh1.src = "car.png"
const vatcan1 = new Image();
vatcan1.src = "chipu.png"
const coin1 = new Image();
coin1.src = "coin.jpg"

class oto{
    anh;
    x;
    y;
    width;
    height;
    score;
    constructor(anh,x,y,width,height) {
        this.anh = anh;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.score = 0;
    }
    vehinh(){
        ctx.drawImage(this.anh, this.x,this.y,this.width,this.height)
    }
}

let car = new oto(anh1,200,200,50,50);
let vatcan = new oto(vatcan1,100,100,100,100);
let coin = new oto(coin1,0,0,30,30);

//di chuyển
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
        else if(event.keyCode == 17){
            checkspeed = true;
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
        else if(event.keyCode == 17){
            checkspeed = false
        }
    })
}
function move(){
    if(rightArrow && car.x + car.width < cvs.width){
        car.x += speed;
    }
    else if(leftArrow && car.x > 0){
        car.x -= speed;
    }
    else if(topArrow && car.y > 0){
        car.y -= speed;
    }
    else if(belowArrow && car.y + car.height < cvs.height){
        car.y += speed;
    }
    else if(checkspeed){
        speed +=1;
        if(speed>20){
            speed=10;
        }
    }
}

//Luật chơi
function checkdung(){
if(car.y > vatcan.y - car.height+20 && car.y < vatcan.y + vatcan.height -20 && car.x > vatcan.x-40 && car.x < vatcan.x + vatcan.width-10  ) {
    alert("thua r")
    reset();
}
}
function andiem(){
    if(car.y > coin.y - car.height && car.y < coin.y + coin.height && car.x > coin.x-50 && car.x < coin.x + coin.width  ) {
        car.score+=1;
        coinrandom()
    }
}
function coinrandom(){
    let x = Math.random()*300;
    let y = Math.random()*300;
    if(y > vatcan.y - coin.height && y < vatcan.y + vatcan.height && x >vatcan.x-50 && x< vatcan.x + vatcan.width ){
        let x = 2*Math.random()*100;
        let y = 2*Math.random()*100;
    }
    coin.x = x;
    coin.y = y;
}

function reset(){
    car.x = 200;
    car.y = 200;
    car.width =50;
    car.height = 50;
    leftArrow = false;
    rightArrow = false;
    topArrow = false;
    belowArrow = false;
    car.score = 0;
    speed = 10;
    let x = Math.random()*300;
    let y = Math.random()*300;
    vatcan.x = x;
    vatcan.y = y;
}
function draw(){
    vatcan.vehinh();
    car.vehinh();
    coin.vehinh();
}
function law(){
    checkdung();
    andiem();
}
function start(){
    ctx.clearRect(0,0,cvs.width,cvs.height)
    move();
    draw();
    law();
    diem.innerText = `Bạn được ${car.score} điểm\n`;
    tocdo.innerText = `Tốc độ của bạn là ${speed} km/h `
    requestAnimationFrame(start)

}
start();
