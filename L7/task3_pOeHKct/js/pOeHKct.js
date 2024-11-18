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

//Lesson 4 hw
function swap(arr,index1,index2){
    let t_elem;
    t_elem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t_elem;
}

swap(user_arr,2,5);
swap(user_arr,8,0);
console.log(user_arr); //show sorted array, Console bug. Use +-comment on line 39 or debugger

let sorted_user_arr = user_arr.sort((a, b) => a.id - b.id);

console.log(user_arr);
