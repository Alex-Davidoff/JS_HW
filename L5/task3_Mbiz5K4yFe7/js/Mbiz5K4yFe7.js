let calc_cylinder_area = (r,h) => 2 * Math.PI * r * (r + h);

let r = 4;
let h = 5;
let cylinder_area = calc_cylinder_area(r,h);

console.log(r,h, cylinder_area);
document.write(`
    <p>r = ${r}</p>
    <p>h = ${h}</p>
    <p>cylinder_area = ${cylinder_area}</p>
`);