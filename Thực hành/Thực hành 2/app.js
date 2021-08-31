class Circle {
    radius;
    color;
    constructor() {
        this.radius = undefined;
        this.color = undefined;
    }
    setCircle(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let s = this.radius * this.radius * Math.PI;
        return s;
    }
}
let circle = new Circle();
circle.setCircle(10,"red");
console.log(circle.getArea())