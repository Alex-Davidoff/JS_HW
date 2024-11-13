let t_arr = [];

function t_arr_init(l){
    for (let c=0; c<l; c++){
        let elem = {};
        elem.id = c;
        elem.name = 'elem_name_'+(c+1);
        elem.age = c+20;
        t_arr.push(elem);
    }
}

t_arr_init(20);
console.log(t_arr);

function arr_show(t_arr, class_name){
    document.write('<div class="'+class_name+'">');
    for (const t_obj of t_arr){
        document.write('<div class="'+class_name+'_elem'+'">');
        for (const t_key in t_obj){
            document.write('<p>'+t_key+" : "+t_obj[t_key]+'</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}

arr_show(t_arr, 'arr');