console.log("task 12 :");

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let condition = 5;
let task12_msg = "Супер";

if (coursesAndDurationArray[0].monthDuration>condition){
    console.log(coursesAndDurationArray[0].title,coursesAndDurationArray[0].monthDuration, task12_msg);
}
if (coursesAndDurationArray[1].monthDuration>condition){
    console.log(coursesAndDurationArray[1].title,coursesAndDurationArray[1].monthDuration, task12_msg);
}
if (coursesAndDurationArray[2].monthDuration>condition){
    console.log(coursesAndDurationArray[2].title,coursesAndDurationArray[2].monthDuration, task12_msg);
}
if (coursesAndDurationArray[3].monthDuration>condition){
    console.log(coursesAndDurationArray[3].title,coursesAndDurationArray[3].monthDuration, task12_msg);
}
if (coursesAndDurationArray[4].monthDuration>condition){
    console.log(coursesAndDurationArray[4].title,coursesAndDurationArray[4].monthDuration, task12_msg);
}
if (coursesAndDurationArray[5].monthDuration>condition){
    console.log(coursesAndDurationArray[5].title,coursesAndDurationArray[5].monthDuration, task12_msg);
}

console.log("-------------------------------");