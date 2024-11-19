class Cinderella {
    constructor(cname, cage, cfootsize) {
        this.cname = cname;
        this.cage = cage;
        this.cfootsize = cfootsize;
    }
}

function CreateCinderellaArray (len){
    let tarr = [];
    for (let c=0; c<len; c++){
        tarr.push(new Cinderella('C_Name'+(c+1),c+18,c+30));
    }
    return tarr;
}

let CinderellaArray = new CreateCinderellaArray(10);
console.log(CinderellaArray);

class Prince{
    constructor (pname, page, shoe){
        this.pname = pname;
        this.page = page;
        this.shoe = shoe;
    }
}

const prince = new Prince('Petya',38,36);
console.log(prince);

function findCinderella(prince, CinderellaArr){
    for (const Cinderella of CinderellaArr){
        if (prince.shoe === Cinderella.cfootsize){
            return Cinderella;
        };
    }
}

let findedCinderella = findCinderella(prince,CinderellaArray);
console.log(findedCinderella);

let findedCinderella2 = CinderellaArray.find((value) => value.cfootsize===prince.shoe);
console.log(findedCinderella2);