class Client{
    constructor(id, cname, surname , email, phone, order){
        this.id = id;
        this.cname = cname;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//+ order=array of object {title,pryce,amount} = function or class

// let test_client = new Client(1, 'cl_name', 'cl_surname', 'cl_email', 380960001122, ['wine','chokolate','orange']);
// console.log(test_client);
/*
function Clients_init (len){
    let tarr = [];
    for (let c=0; c<len; c++){
        

    }
    return tarr;
}*/