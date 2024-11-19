class Client{
    constructor(id, cname, surname , email, phone, products){
        this.id = id;
        this.cname = cname;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}

// const client1 = new Client(1, 'test name 1', 'test surname 1', 'email1@gmail.com', 380961112233, new Product('wine',200,1),new Product('orange',160,10));
// console.log(client1);

let clients = [
new Client(1, 'test name 1', 'test surname 1', 'email1@gmail.com', 380961112233, [{title:'apple',pryce:100,amount:10},{title:'orange',pryce:160,amount:5}]),
new Client(2, 'test name 2', 'test surname 2', 'email2@gmail.com', 380961112233, [{title:'apple',pryce:100,amount:10}]),
new Client(3, 'test name 3', 'test surname 3', 'email3@gmail.com', 380961112233, [{title:'apple',pryce:100,amount:10},{title:'orange',pryce:160,amount:5}]),
new Client(4, 'test name 4', 'test surname 4', 'email4@gmail.com', 380961112233, [{title:'apple',pryce:100,amount:10},{title:'orange',pryce:160,amount:5},{title:'juice',pryce:80,amount:1}]),
new Client(5, 'test name 5', 'test surname 5', 'email5@gmail.com', 380961112233, [])
];

// console.log(clients);
// console.log(Array.isArray(clients));
// console.log(typeof(clients[0].order));
// console.log(Array.isArray(clients[0].order));
// console.log(clients[0].order.length);

let sortarr = clients.sort((a, b) => (a.order.length - b.order.length));

console.log(sortarr);