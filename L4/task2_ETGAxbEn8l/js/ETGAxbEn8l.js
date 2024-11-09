function calc_circle_area(r){
    return r*r*Math.PI;
}

let r=20;
let circle_area = calc_circle_area(r);

console.log(r,circle_area);
document.write(`
    <p>r = ${r}</p>
    <p>circle_area = ${circle_area}</p>
`);