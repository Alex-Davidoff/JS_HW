console.log("task 10 :");

let t_val_a = +prompt("Enter A (number) (task 10)");
let t_val_b = +prompt("Enter B (number) (task 10)");
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