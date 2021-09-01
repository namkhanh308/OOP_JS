class SwitchButton{
    status;
    lamp;
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(lamp){
        this.lamp = lamp;
    }
    switchOff(){
        this.lamp.turnOff();
    }
    switchOn(){
        this.lamp.turnOn()
    }

}
class ElectricLamp{
    status;
    constructor(status) {
        this.status = false;
    }
    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
    getStatus(){
        return this.status;
    }
}
let switchButton = new SwitchButton();
let lamp = new ElectricLamp();
switchButton.connectToLamp(lamp);
switchButton.switchOn();
console.log(lamp.getStatus())
switchButton.switchOff()
console.log(lamp.getStatus())