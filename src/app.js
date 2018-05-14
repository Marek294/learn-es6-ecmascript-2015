function* greet() {
  let friendly = yield "How";
  friendly = yield friendly + "Are";
  yield friendly + "You";
}

let greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next(" asdasd ").value);
console.log(greeter.next(" hi ").value);

function* graph() {
  let x = 0;
  let y = 0;
  while(true) {
    yield {x, y};
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);