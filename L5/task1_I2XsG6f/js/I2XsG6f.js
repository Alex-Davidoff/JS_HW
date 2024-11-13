function calc_area(a, b){
    return a * b;
}

let a=5;
let b=10;
let rect_area = calc_area(a, b);

console.log(a, b, rect_area);
document.write(`
    <p>a= ${a}</p>
    <p>b= ${b}</p>
    <p>rect_area= ${rect_area}</p>
`);