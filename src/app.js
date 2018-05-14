var myMap = new Map();

var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

console.log('get on myMap = ' + myMap.get(myObj))
console.log('has on non-existing key = ' + myMap.has('qwerty'))

for(var [key, value] of myMap.entries()){
  console.log(key + ' = ' + value)
}

var myWeakMap = new WeakMap();

var myObj2 = {};
var myFunc2 = function(){};

myMap.set(myObj2, 'bar');
myMap.set(myFunc2, 'world');

console.log(myMap.get(myFunc2))