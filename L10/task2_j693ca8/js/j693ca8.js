let age_input = document.getElementById('uage_inp');

let cbutton = document.getElementById('test');

cbutton.onclick = function (){
    let age = +age_input.value;
    if (age){
        if (age<18) {
            alert('Вік менше 18');
        } else {
            console.log(age);
        }
    } else {
        alert('"Вік" Помилка вводу');
    }
}