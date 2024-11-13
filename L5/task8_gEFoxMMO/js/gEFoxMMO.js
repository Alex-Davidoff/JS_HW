let t_arr = [];

function t_arr_init(l,n_type){
    t_arr = [];
    for (let c=0; c<l; c++){
        let el;
        if (n_type===0){
            el = c*c;
        } else if (n_type===1){
            el = 'elem_'+(c+1);
        } else if (n_type===2){
            el = (c % 2 === 0) ? true : false;
        }
    t_arr.push(el);    
    }
}

t_arr_init(8,0);
console.log(t_arr);

function t_arr_show(){
    document.write('<ul>');
    for (const elem of t_arr){
        document.write('<li>'+elem+'</li>');
    }
    document.write('</ul>');
}

t_arr_show();