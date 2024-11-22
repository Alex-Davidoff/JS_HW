let tarr = ['Main','Products','About us','Contacts'];

let ul_el = document.createElement('ul');
ul_el.id = 'list1';

for (const item of tarr){
    let li_el = document.createElement('li');
    ul_el.appendChild(li_el);
    li_el.innerHTML = item;
}

document.body.appendChild(ul_el);