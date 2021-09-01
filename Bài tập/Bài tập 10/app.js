class Remote {
    ma;
    tv;
    constructor(ma,tv) {
        this.ma = ma;
        this.tv = tv;
    }
    chuyenkenh(kenh){
        this.tv.chuyenkenhTV(kenh);
    }
    dieutrinhamluong(amluong){
        this.tv.dieukhienamluong(amluong)
    }
    getKenhhientai(){
        return this.tv.getKenhhientai();
    }
    getAmluonghientai(){
        return this.tv.getAmluonghientai();
    }
    battv(){
        this.tv.battv();
    }
    tattv(){
        this.tv.tattv();
    }
}
class TV {
    kenhhientai;
    amluonghientai;
    trangthaibat;
    constructor(kenhhientai,amluong,trangthaibat) {
        this.kenhhientai = kenhhientai;
        this.amluonghientai = amluong;
        this.trangthaibat = trangthaibat;
    }

    chuyenkenhTV(kenh){
        this.kenhhientai = kenh;
    }
    dieukhienamluong(amluong){
        this.amluonghientai = this.amluonghientai + amluong;
    }
    getTrangthai(){
        return this.trangthaibat;
    }
    getKenhhientai(){
        return this.kenhhientai
    }
    getAmluonghientai(){
        return this.amluonghientai;
    }
    battv(){
        this.trangthaibat = true;
    }
    tattv(){
        this.trangthaibat = false;
    }
}

let tv = new TV("vtv3",60, false);
let remote = new Remote(1,tv);

remote.battv();
tv.chuyenkenhTV(7)
remote.chuyenkenh(3);
remote.dieutrinhamluong(2);
remote.tattv();
console.log(tv.amluonghientai)