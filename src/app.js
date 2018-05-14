const products = Array.from(document.querySelectorAll('.product'));

products
  .filter(item => parseFloat(item.innerHTML) < 10)
  .forEach(item => item.style.color = 'red')