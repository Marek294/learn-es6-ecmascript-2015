const VALUE = {};
VALUE.foo = 'bar';
console.log('value: ', VALUE);

const foo = 'baz';

if(true) {
    const foo = 'bar';
    console.log('foo: ', foo);
}

console.log('foo: ', foo);