let test = document.createElement('div');
test.id = 'test1';
test.innerText = 'test elem';
test.classList.add('wrap', 'collapse', 'alpha', 'beta');
test.style.fontSize = '3rem';
test.style.color = 'green';
test.style.margin = '1rem auto';
document.body.appendChild(test);

console.log(test);

let test2 = test.cloneNode(true);
test2.id = 'test2';
document.body.appendChild(test2);