class Client{
    constructor(id, cname, surname , email, phone, ...products){
        this.id = id;
        this.cname = cname;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}

function Product(title,pryce,amount){
        this.title = title;
        this.pryce = pryce;
        this.amount = amount;
    }

const client1 = new Client(1, 'test name 1', 'test surname 1', 'email1@gmail.com', 380961112233, new Product('wine',200,1),new Product('orange',160,10));
console.log(client1);

function Clients_fill (len){
    let tarr = [];
    for (let c=0; c<len; c++){
        let titem = new Client(1, 'test name 1', 'test surname 1', 'email1@gmail.com', 380961112233, [{title:'apple',pryce:100,amount:10},{title:'orange',pryce:160,amount:5}]);
        tarr.push(titem);
    }
    return tarr;
}

let clients = new Clients_fill(10);
console.log(clients);