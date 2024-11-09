let t_arr = [];

function t_arr_init(l){
    t_arr = [];
    for (let c=0; c<l; c++){
        let el = Math.pow(2,c);
        t_arr.push(el);    
    }
}

t_arr_init(8,0);
console.log(t_arr);

function sum_arr(arr){
    let tsum = 0;
    for (const el of arr){
        tsum = tsum + el;
    }
    return tsum;
}

console.log(sum_arr(t_arr));
document.write('<p>'+'summary : '+sum_arr(t_arr)+'</p>');