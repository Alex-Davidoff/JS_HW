const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray);

let courcesPanel = document.createElement('div');
courcesPanel.classList.add('courcesPanel');
for (const tcourse of coursesArray){
    let courceCard = document.createElement('div');
    courcesPanel.appendChild(courceCard);
    courceCard.classList.add('courceCard');
    let courceTitle = document.createElement('h2');
    courceCard.appendChild(courceTitle);
    courceTitle.innerHTML = tcourse.title;
    let courseLenght = document.createElement('span');
    courceCard.appendChild(courseLenght);

        let courceMonths = document.createElement('p');
        courseLenght.appendChild(courceMonths);
        courceMonths.innerHTML = tcourse.monthDuration+' months';
        let courceHours = document.createElement('p');
        courseLenght.appendChild(courceHours);
        courceHours.innerHTML = tcourse.hourDuration+' hours';


    let modulesPanel = document.createElement('ul');
    courceCard.appendChild(modulesPanel);
    for (const tmodule of tcourse.modules){
        let module = document.createElement('li');
        modulesPanel.appendChild(module);
        module.innerHTML = tmodule;
    }
}

document.body.appendChild(courcesPanel);