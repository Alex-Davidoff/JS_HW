// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log("task 6 :");

let x = +prompt("Enter X(number) value");
console.log("X =", x);
if (isNaN(x)){
    console.log("input error (X)"); 
} else {
    if (x!==0) {
        console.log("Вірно");
    } else {
        console.log("Невірно");
    }
}

x = 1;
console.log("X =",x);
if (x!==0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

x = 0;
console.log("X =",x);
if (x!==0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

x = -3;
console.log("X =",x);
if (x!==0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}


console.log("-------------------------------");