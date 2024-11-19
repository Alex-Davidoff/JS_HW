
Array.prototype.lForEach = function (strFunc){
    for (const arritem of this){
        strFunc(arritem);
    }
} /*++-copypaste, +understanding*/ 

let tarr = [0,1,2,3,4,5,6];
tarr.lForEach((item) => console.log(item));


Array.prototype.lFilter = function (LogFunc){
    let tarr = [];
    for (const arritem of this){
        if (LogFunc(arritem)){
            tarr.push(arritem);
        }
    }
    return tarr;
}

//array from resolve
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users.lFilter(value => value.age>=30));