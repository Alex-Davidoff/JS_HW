class User {
    constructor(id, uname, surname, email, phone) {
        this.id = id;
        this.uname = uname;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

function CreateArrOfUser (len){
    let tarr = [];
    for (let c = 0; c<len; c++){
        tarr.push(new User(c+1,
            'user name '+(c+1),
            'user surname '+(c+1),
            'email'+(c+1)+'@gmail.com',
            380960000000+c+1));
    }
    return tarr;
}

let user_arr = CreateArrOfUser(10);

console.log(user_arr);

let filt_user_arr = user_arr.filter(value => ((value.id % 2) === 0));

console.log(filt_user_arr);
