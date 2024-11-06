console.log("task 11 :");

let x2 = null;   //false 0 "" null undefined NaN
console.log("start=",typeof(x2),x2);
if ( !(!!x2) ){
    x2 = "default";
}
console.log("result=",typeof(x2),x2);

x2 = 123;
console.log("start=",typeof(x2),x2);
if ( !(!!x2) ){
    x2 = "default";
}
console.log("result=",typeof(x2),x2);


console.log("-------------------------------");