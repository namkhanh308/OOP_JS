class Temperature {
    doC;
    constructor(doC) {
        this.doC = doC;
    }
    getDoF(){
        return this.doC * 1.8 * 32;
    }
    getDoK(){
        return this.doC + 273.15;
    }
}
let tem = new Temperature(25);
console.log(tem.getDoF());
console.log(tem.getDoK());