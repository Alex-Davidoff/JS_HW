let testobject = {
    id: 1,
    caption: 'test full name',
    mass: 37.5,
    someboolprop: true,
    transportAttrib: ['fragile', `don't rotate`, 'protect from sunlight'],
    adress_to: {
        postindex: 11701,
        city: 'Zvyahel',
        recipient: 'Aaaa Bbb Ccc',
        confirm_check: true
    },
    getAdress: function(){
        return this.adress_to.postindex+', '+this.adress_to.city+', '+this.adress_to.recipient;
    }
}

console.log(testobject);
console.log(testobject.getAdress());
console.log('------------');
console.log(Array.isArray(testobject.transportAttrib));

console.log('------------');

function createFullCopy(orig){
    let tmpres;
    for (const attr in orig){
        //console.log(Array.isArray(orig[attr]), attr);
        let tmp = orig[attr];
        //tmpres[attr] = tmp;
    }
    return tmpres;
}


const copytest = createFullCopy(testobject);
console.log(copytest);