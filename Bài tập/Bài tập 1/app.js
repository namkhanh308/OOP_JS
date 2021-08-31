class Rectangle{
    chieudai;
    chieurong;
    constructor(chieudai,chieurong) {
        this.chieudai = chieudai;
        this.chieurong = chieurong;
    }
    setChieuDai(chieudai){
        this.chieudai = chieudai;
    }
    setChieuRong(chieurong){
        this.chieurong = chieurong;
    }
    getDienTich(){
        return this.chieudai*this.chieurong;
    }
    getChuVi(){
        return (this.chieurong + this.chieudai)*2;
    }
    Ve(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(50,50, this.chieudai,this.chieurong);
    }
}
function aa(x,y){
    let hcn = new Rectangle()
    hcn.setChieuDai(x);
    hcn.setChieuRong(y)
    console.log(hcn.getChuVi())
    console.log(hcn.getDienTich())
    hcn.Ve();
}
// let x = 50;
// let y = 50;
function start(){
    aa(50,50);
}
start();

// setInterval(start,1000)