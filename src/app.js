function Store() {
  let aisle = {
    fruit: [],
    vegetables: []
  };

  return {
    add: (category, ...items) => {
      items.forEach((value, index, array) => {
        aisle[category].push(value);
      })
    },
    aisle
  }
}

let myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle)