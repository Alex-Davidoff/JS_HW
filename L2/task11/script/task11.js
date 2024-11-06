console.log("task 11 :");

let x2 = 123;   //false 0 "" null undefined NaN
console.log("start=",typeof(x2),x2);
if ((x2===false) || (x2===0) || (x2==="") || (x2===null) || (x2===undefined) || (x2===NaN)){
    x2 = "default";
}
console.log(typeof(x2),x2);

x2 = 0;
console.log("start=",typeof(x2),x2);
if ((x2===false) || (x2===0) || (x2==="") || (x2===null) || (x2===undefined) || (x2===NaN)){
    x2 = "default";
}
console.log(typeof(x2),x2);


console.log("-------------------------------");