let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courcesBlock = document.createElement('div');
courcesBlock.id = 'courcesBlock';

for (const [index, tcource] of coursesAndDurationArray.entries()){
    let cource = document.createElement('div');
    courcesBlock.appendChild(cource);
    cource.id = 'cource'+(index+1);
    let cinfo = document.createElement('p');
    cource.appendChild(cinfo);
    cinfo.innerHTML = tcource.title+' - '+tcource.monthDuration+' months';
}

document.body.appendChild(courcesBlock);