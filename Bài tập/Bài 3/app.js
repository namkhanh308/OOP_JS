class Mobile{
    battery;
    tnds = [];
    tnd = [];
    tng = [];
    turn;
    constructor() {
        this.battery = 100;
        this.tnds = [];
        this.tnd = [];
        this.tng = [];
        this.turn = false;
    }
    momay(){
        this.turn = true;
        this.battery--;
    }
    tatmay(){
        this.turn = false;
        this.battery--;
    }
    sacpin(){
        this.battery = 100;
    }
    soantinnhan(a){
        this.tnds.push(a);
        this.battery--;
    }
    guitinnhan(a){
        this.tng.push(this.tnds);
        a.tnd.push(this.tnds);
        this.tnds = '';
        this.battery--;
    }
    doctinnhanden(){
        for (let i = 0; i < this.tnd.length; i++) {
            console.log(this.tnd[i])
        }
        this.battery--;
    }
    doctinnhangui(){
        for (const tin of this.tng) {
            console.log(tin)
        }
        this.battery--;
    }
}

let nokia = new Mobile();
let iphone = new Mobile();
nokia.momay();
iphone.momay();
if(nokia.turn == true && iphone.turn == true){
    start(nokia,iphone)
}
else{
    alert("Bạn phải mở 2 máy đã")
}
function start(nokia,iphone){
    nokia.soantinnhan("Tớ là nokia đây 1")
    nokia.soantinnhan("Tớ là nokia đây 2")
    nokia.guitinnhan(iphone);
    nokia.doctinnhangui();

    console.log("Nokia trên , sony dưới ***********************")

    iphone.doctinnhanden();
    // iphone.soantinnhan("Tớ là Sony đây")
    // iphone.guitinnhan(nokia)
    // iphone.doctinnhangui();


}


