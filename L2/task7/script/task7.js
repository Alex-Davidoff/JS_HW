console.log("task 7 :");

let t_time = 29;
console.log("t_time =",t_time);

if ((t_time>=0) && (t_time<=14)){
    console.log("t_time at 1/4 hour");
} else if ((t_time>=15) && (t_time<=29)){
    console.log("t_time at 2/4 hour");
} else if ((t_time>=30) && (t_time<=44)){
    console.log("t_time at 3/4 hour");
} else if ((t_time>=45) && (t_time<=59)){
    console.log("t_time at 4/4 hour");
} else {
    console.log("t_time out of range");
}

console.log("-------------------------------");