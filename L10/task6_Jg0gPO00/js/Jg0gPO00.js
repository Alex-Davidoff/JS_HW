let kginput = document.getElementById('kg_input');
let poundoutput = document.getElementById('pound_output');

kginput.oninput = function (){
    const kgval = +kginput.value;
    const poundval = kgval * 2.2046;
    poundoutput.value = poundval;
}