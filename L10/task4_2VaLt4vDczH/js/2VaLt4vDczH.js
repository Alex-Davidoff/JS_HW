let counter_storage = document.getElementById('counter');
let c = localStorage.getItem('test_c') || 0;
counter_storage.innerText = c;
localStorage.setItem('test_c',++c);

document.getElementById('butt_reset').onclick = function (){
    localStorage.setItem('test_c', 1);
    counter_storage.innerText = 0;
}