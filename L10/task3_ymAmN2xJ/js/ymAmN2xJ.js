document.forms['readform'].addEventListener('submit', function (event){
    event.preventDefault();
})

document.forms['readform']['button_read'].onclick = function(){
    let user = {name : document.forms['readform']['uname'].value,
    surname : document.forms['readform']['usurname'].value,
    age : document.forms['readform']['uage'].value}
    // console.log(user);
    let userblock = document.createElement('div');
    userblock.classList.add('userblock');
    for (const ch in user){
        let p_ch = document.createElement('p');
        p_ch.innerText = ch + ' : ' + user[ch];
        userblock.appendChild(p_ch);
    }
    document.body.appendChild(userblock);
};