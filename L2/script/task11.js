// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

console.log("task 11 :");

let x2 = 123;   //false 0 "" null undefined NaN
console.log(typeof(x2),x2);

if ((x2===false) || (x2===0) || (x2==="") || (x2===null) || (x2===undefined) || (x2===NaN)){
    x2 = "default";
}
console.log(typeof(x2),x2);


console.log("-------------------------------");