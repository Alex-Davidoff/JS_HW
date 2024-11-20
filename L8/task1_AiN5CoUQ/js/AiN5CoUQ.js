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
        //return 'Adress str';
    },
    road:{
        roadindexes:[{roadindex:12015, check:false},
                     {roadindex:12000, check:false},
                     {roadindex:11000, check:false},
                     {roadindex:11701, check:false}],
        showRoad: function(){
            let troad = 'Шлях посилки: ';
            for (const step of this.roadindexes){
                troad = troad.concat(step.roadindex, '/', step.check, ' ');
            }
            return troad.trimEnd();
        }
    }
}

console.log(testobject);
console.log(testobject.getAdress());
console.log(testobject.road.showRoad());


function createFullCopy(orig){
if (orig){    
    let tmp = JSON.parse(JSON.stringify(orig));
    for (const attr in orig){
        if (typeof orig[attr] === 'function'){
            tmp[attr] = orig[attr].bind(tmp);
        }
    }
    return tmp;
} else {
    console.log('createFullCopy error "original object is null"');
}
}

console.log('------------ copy');
const copytest = createFullCopy(testobject);
console.log(copytest);
console.log(copytest.getAdress());
//console.log('copytest.road.showRoad()', 'not exists in copy'); //need upgrade (recursion)
