class Rat{
    ten;
    cannang;
    tocdo;
    trangthaisong;
    trangthai;
    constructor(ten,cannang,tocdo) {
        this.ten = ten;
        this.cannang = cannang;
        this.tocdo = tocdo;
        this.trangthaisong = true;
        this.trangthai = false;
    }
    hanhvi(){
        console.log("Chít chít")
    }
}
class Cat{
    ten;
    cannang;
    tocdo;
    soluongchuot;
    constructor(ten,cannang,tocdo) {
        this.ten = ten;
        this.cannang = cannang;
        this.tocdo = tocdo;
        this.soluongchuot = 0;
    }
    hanhvi(){
        console.log("Meo meo")
    }
    anthitchuot(chuot){
        if(chuot.trangthaisong === true && this.soluongchuot ===1 && chuot.trangthai === true){
            this.cannang += chuot.cannang;
            chuot.trangthaisong = false;
            console.log("Ăn thành công")
            this.soluongchuot--;
            chuot.trangthai = false;
        }
        else {
            console.log("Không có chuột nào để ăn")
        }
    }
    batchuot(chuot){
        if(this.tocdo > chuot.tocdo && this.soluongchuot ===0  && chuot.trangthaisong === true){
            chuot.trangthai = true;
            this.soluongchuot ++;
            console.log("Bắt thanh cong")
        }
        else{
            console.log("Bắt không thành công")
        }
    }
}
let chuot = new Rat("Jerry",3, 5);
let chuot2 = new Rat("Jerry",3, 5);
let meo = new Cat("Tom", 10, 10);

meo.batchuot(chuot);
meo.batchuot(chuot2);
meo.anthitchuot(chuot2);
meo.anthitchuot(chuot);

