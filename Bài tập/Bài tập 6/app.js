class Apple{
    weight;
    constructor(weight) {
        this.weight = 10;
    }
    getWeight(){
        return this.weight;
    }


}
class Human{
    name;
    gender;
    weight;
    constructor(name, gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    say(string){
        console.log(string)
    }
    checkApple(apple){
        if(apple.weight>=0){
            return true;
        }
        else {
            return false;
        }
    }
    eat(apple){
        if(this.checkApple(apple)){
            this.weight++;
            apple.weight--;
        }
        else {
            alert("Đã hết táo rồi")
        }
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
}
let apple = new Apple();
console.log("Khối lượng quả táo là "+ apple.getWeight());
let Adam = new Human("Adam","Nam",70);
let Eva = new Human("Eva","Nữ",50);
console.log("Cân nặng ban đầu của Adam là: "+ Adam.getWeight())
console.log("Cân nặng ban đầu của Eva là: "+ Eva.getWeight())
Adam.eat(apple);
Eva.eat(apple);
console.log("\n")
console.log("Cân nặng sau 1 lần ăn của Adam và Eva là " + Adam.getWeight() + " " + Eva.getWeight())
console.log("Khối lượng quả táo còn lại là "+ apple.getWeight())


