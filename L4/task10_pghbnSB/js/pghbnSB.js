let arr = [69, 15, -26, 10, 68, -94, -88, -3, -93, 67, -22, -9, 65, -56, -36, -78, -42, 8, -76, -27];
console.log(arr);

function get_snallest_elem(inp_arr){
    let sm = 0;
    for (const el of inp_arr){
        if (el<sm) {sm = el}
    }
    return sm;
}

console.log(get_snallest_elem(arr));
document.write('<p>'+'smallest value = '+get_snallest_elem(arr)+'</p>');