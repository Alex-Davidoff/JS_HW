let arr = [69, 15, -26, 10, 68, -94, -88, -3, -93, 67, -22, -9, 65, -56, -36, -78, -42, 8, -76, -27];
console.log(arr);

let get_snallest_elem = (inp_arr) =>{
    let sm = 0;
    for (const el of inp_arr){
        if (el<sm) {sm = el}
    }
    return sm;
}

let t_smallest = get_snallest_elem(arr);

console.log(t_smallest);
document.write('<p>'+'smallest value = '+t_smallest+'</p>');