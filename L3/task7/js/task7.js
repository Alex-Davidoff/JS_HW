let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<h3>status = true</h3>');
for (const t_user of users){
    if (t_user.status){
        document.write('<p>'+t_user.name+'</p>');  
    }
}
document.write('<hr>');

document.write('<h3>status = false</h3>');
for (const t_user of users){
    if (!(t_user.status)){
        document.write('<p>'+t_user.name+'</p>');  
    }
}
document.write('<hr>');

document.write('<h3>age > 30</h3>');
for (const t_user of users){
    if (t_user.age>30){
        document.write('<p>'+t_user.name+'</p>');  
    }
}

for (const t_user of users){
    console.log(t_user);
}