// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

console.log("task 10 :");

let t_val_a = +prompt("Enter A (number)");
let t_val_b = +prompt("Enter B (number)");
console.log("A = "+t_val_a,"B = "+t_val_b);

if (isNaN(t_val_a) || isNaN(t_val_b)){
    console.log("Input A or B error"); 
} else {
    if (t_val_a>t_val_b){
        console.log("max", t_val_a);
    } else if (t_val_a<t_val_b){
        console.log("max", t_val_b);
    } else if (t_val_a===t_val_b){
        console.log("A = B");
    }
}    


console.log("-------------------------------");