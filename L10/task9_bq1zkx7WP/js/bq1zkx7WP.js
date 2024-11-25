let grn_cont = document.getElementById('grn_cont');
let grnobj = JSON.parse(localStorage.getItem('grnobj'));
if (!grnobj){
    grnobj = {grn:100, updtimesec: Math.floor(Date.now() / 1000)}
    localStorage.setItem('grnobj',JSON.stringify(grnobj));
}

grn_cont.innerText = grnobj.grn+' грн.';

//console.log(Math.floor(Date.now() / 1000));

if ( (Math.floor(Date.now() / 1000)-grnobj.updtimesec)>10){
    grnobj.grn += 10;
    grnobj.updtimesec = Math.floor(Date.now() / 1000);
    localStorage.setItem('grnobj',JSON.stringify(grnobj));
    grn_cont.innerText = grnobj.grn+' грн.';
    //console.log('setitem');
} else {
    //console.log('<10s');
}