const d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true) {
      resolve('Hello World');
    } else {
      reject('Error Message');
    }
  },2000);
})

d
  .then(data => {
    console.log('success: ', data);
    throw new Error('throwed error');
    return data;
  })
  .then(data => console.log('success 2: ', data))
  .catch(error => console.log('error: ', error));