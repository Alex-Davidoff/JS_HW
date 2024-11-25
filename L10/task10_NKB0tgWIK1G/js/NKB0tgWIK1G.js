function CreateArr(len){
    let tmp = [];
    for (let c=0; c<len; c++){
        const item = {id:c+1, uname: 'test uzver name '+(c+1)};
        tmp.push(item);
    }
    return tmp;
}

const uzvers = new CreateArr(100);
let cpos = 0;
const clen = 10;
// console.log(uzvers);
// const uzvers = new CreateArr(128);
// const clen = 15;



function showArr(frompos, len, itarr){
    const arr_cont = document.getElementById('arr_cont');
    arr_cont.replaceChildren();             //clear html container
    let filtarr = itarr.filter((value, index) => ( (index>=frompos) && (index<(frompos+len)) ) );
    // console.log(filtarr);
    let topos = frompos;
    for (const fitem of filtarr){
        let item_cont = document.createElement('li');
        item_cont.innerText = fitem.id+' / '+fitem.uname;
        arr_cont.appendChild(item_cont);
        topos++;
    }
    let pos_cont = document.getElementById('pos');
    pos_cont.innerText = (frompos+1)+'-'+topos+' / '+itarr.length;
}

showArr(cpos,clen,uzvers);

document.getElementById('next').onclick = function(){
    if ((cpos+clen)<uzvers.length){
        cpos += clen;
        showArr(cpos,clen,uzvers);
    }
}

document.getElementById('prev').onclick = function(){
    cpos -= clen;
    if (cpos<0){cpos = 0};
    showArr(cpos,clen,uzvers);
}