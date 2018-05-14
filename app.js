var color = 'red';
var speed = 10;
var drive = 'go';

var car = {
    color,
    speed,
    [drive]() {
        console.log('vroom');
    }
}

console.log(car.color);
console.log(car.speed);

car[drive]();