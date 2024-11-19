function CarInit(model, vendor, prodyear, maxspeed, ecapacity) {
    this.model = model;
    this.vendor = vendor;
    this.prodyear = prodyear;
    this.maxspeed = maxspeed;
    this.ecapacity = ecapacity;
    this.drive =  function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };   
    this.info = function (){
        console.log('model', this.model);
        console.log('vendor', this.vendor);
        console.log('prodyear', this.prodyear);
        console.log('maxspeed', this.maxspeed);
        console.log('ecapacity', this.ecapacity);
        if (this.driver) {console.log('driver', this.driver)}
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxspeed = this.maxspeed + newSpeed;
    }
    this.changeYear = function (newValue){
        this.prodyear = newValue;
    }
    this.addDriver = function (adriver){
        this.driver = adriver;
    }
}

const tcar = new CarInit('Ford Mondeo', 'Ford', 1996, 160, 1.6);

tcar.drive();
tcar.increaseMaxSpeed(20);
tcar.changeYear(2000); 
tcar.addDriver({fullname:'Vasia Somikov', drvExpY:20, categories:['B','B+','C','C+','D']});
tcar.info(); 

console.log(tcar);