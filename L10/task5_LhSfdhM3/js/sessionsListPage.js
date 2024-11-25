let sessionsList = JSON.parse(localStorage.getItem('sessionsList'));

if (sessionsList){
    let dtarrblock = document.createElement('ul');
    dtarrblock.style.listStyle = 'none';
    for (const titem of sessionsList){
        let dtitem = document.createElement('li');
        dtitem.innerText = titem;
        dtarrblock.appendChild(dtitem);
    }
    document.body.appendChild(dtarrblock);
} else {
    let palert = document.createElement('p');
    palert.innerText = 'Length 0';
    document.body.appendChild(palert);
}