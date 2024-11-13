let temp_arr = [];

function temp_arr_init(len){
    temp_arr = [];
    for (let c = 0; c<len; c++){
        let user = {};
        user.id = c;
        user.name = 'user_name_' + (c+1);
        user.genre = (c % 2 === 0) ? 'M' : 'F';
        user.status_active = (c % 3 === 0) ? false : true;
        temp_arr.push(user);
    }
}

temp_arr_init(12);
console.log(temp_arr);

function arr_show(inp_arr, class_name){
    document.write('<div class="'+class_name+'">');
    for (const t_obj of inp_arr){
        document.write('<div class="'+class_name+'_element'+'">');
        for (const t_key in t_obj){
            document.write('<p>'+t_key+" : "+t_obj[t_key]+'</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}

arr_show(temp_arr, 'arr');