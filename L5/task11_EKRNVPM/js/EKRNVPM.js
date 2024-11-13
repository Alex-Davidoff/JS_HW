function t_arr_init(l){
    inp_arr = [];
    for (let c=0; c<l; c++){
        let el = Math.pow(2,c);
        inp_arr.push(el);    
    }
    return inp_arr;
}

let t_arr = t_arr_init(8);
console.log(t_arr);

let sum_arr = (arr) => {
    let tsum = 0;
    for (const el of arr){
        tsum = tsum + el;
    }
    return tsum;
}

let t_sum = sum_arr(t_arr);

console.log('func output', sum_arr(t_arr));
console.log('val output', t_sum);
document.write('<p>'+'summary : '+t_sum+'</p>');