function buildTable (rows, cols, filltext){
    if (document.getElementById('errp')){   //remove previsious results
        document.body.removeChild(document.getElementById('errp'));
    }
    if (document.getElementById('temptable')){
        document.body.removeChild(document.getElementById('temptable'));
    }
    if ((rows) && (cols)){                  //check for 0, if true - build
        let ttable = document.createElement('table');
        ttable.id = 'temptable';
        for (let r=1; r<=rows; r++){
            let trow = document.createElement('tr');
            ttable.appendChild(trow);
            for (let c=1; c<=cols; c++){
                let tcell = document.createElement('td');
                tcell.innerText = filltext;
                trow.appendChild(tcell);
            }
        }
        document.body.appendChild(ttable);
    } else {                                //if check for 0 false
        let errp = document.createElement('p');
        errp.id = 'errp';
        errp.innerText = '0 cols or rows';
        document.body.appendChild(errp);
    }
}

document.getElementById('t_build').onclick = function (){
    buildTable(
        document.getElementById('rows').value,
        document.getElementById('columns').value,
        document.getElementById('fill').value
    );
};