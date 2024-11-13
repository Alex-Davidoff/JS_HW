let calc_area = (a, b) => a * b;

let a=5;
let b=10;

console.log(calc_area(a,b));

document.write(`
    <p>a= ${a}</p>
    <p>b= ${b}</p>
    <p>rect_area= ${calc_area(a,b)}</p>
`);