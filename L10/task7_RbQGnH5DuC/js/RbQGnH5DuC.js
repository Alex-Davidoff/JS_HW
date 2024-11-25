function addToLocalStorage(arrayName, ...objToAdd){
    let temparr = JSON.parse(localStorage.getItem(arrayName)) || [];
    temparr.push(...objToAdd);
    console.log(temparr);
    localStorage.setItem(arrayName, JSON.stringify(temparr));
}

addToLocalStorage('numbers', 22, 33, 44);
addToLocalStorage('numbers', 55);

addToLocalStorage('obj', {id:1, uname:'vasya'}, {id:2, uname:'petya'});
addToLocalStorage('obj', {id:3, uname:'olja'});

document.getElementById('cl_stor').onclick = function (){
    localStorage.removeItem('numbers');
    localStorage.removeItem('obj');
}