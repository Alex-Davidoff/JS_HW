console.log("task 9 :");

let t_day2 = +prompt("Enter Number Day of Week value (task 9)");
console.log("t_day2 =",t_day2);

if (isNaN(t_day2)){
    console.log("day of week Not a Number"); 
} else {
let addmessage = "day task ...";    
switch (t_day2){
    case 1:{
        console.log("Monday",":",addmessage);
        break;
    }
    case 2:{
        console.log("Tuesday",":",addmessage);
        break;
    }
    case 3:{
        console.log("Wednesday",":",addmessage);
        break;
    }
    case 4:{
        console.log("Thursday",":",addmessage);
        break;
    }
    case 5:{
        console.log("Friday",":",addmessage);
        break;
    }
    case 6:{
        console.log("Saturday",":",addmessage);
        break;
    }
    case 7:{
        console.log("Sunday",":",addmessage);
        break;
    }
    default:{
        console.log("day of week range error");
        break;
    }
}
}



console.log("-------------------------------");