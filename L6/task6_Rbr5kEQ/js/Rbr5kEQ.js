let tarr = [10,8,-7,55,987,-1011,0,1050,0];
console.log(typeof(tarr[0]),tarr[0]);

let strarr = tarr.map(function (value){
    return value.toString();
});

console.log(typeof(strarr[0]),strarr[0]);