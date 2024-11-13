let temp_arr = [];

function* arrItemGen(){
    let items = [0,11,22,33,44,55];
    for (const outItem of items){
        yield outItem;
    }
}

const arrItemVal = arrItemGen();

function temp_arr_init(){
    temp_arr = [];
    for (let c = 0; c<6; c++){
        temp_arr.push(arrItemVal.next().value);
    }
}

temp_arr_init();
console.log(temp_arr);

let arr_show = (inp_arr) =>{
    for (const t_item of inp_arr){
        console.log(t_item);
    }
} 

let tval = arr_show(temp_arr);