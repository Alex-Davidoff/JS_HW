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
    cource.classList.add('item');
    let cinfo1 = document.createElement('h1');
    cource.appendChild(cinfo1);
    cinfo1.classList.add('heading');
    cinfo1.innerHTML = tcource.title;
    let cinfo2 = document.createElement('p');
    cource.appendChild(cinfo2);
    cinfo2.classList.add('description');
    cinfo2.innerHTML = tcource.monthDuration;
}

document.body.appendChild(courcesBlock);