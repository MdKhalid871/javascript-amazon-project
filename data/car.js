class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen;
    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo(){
        console.log(`${this.#brand} ${this.#model}, Speed : ${this.speed} km/h`);
    }
    go(){
        if(this.isTrunkOpen == true){
            return;
        }
        if(this.speed <= 195){
            this.speed += 5;
        } 
    }
    brake(){
        if(this.speed >= 5){
            this.speed -= 5;
        }    
    }
    openTrunk(){
        if(this.speed == 0){
            this.isTrunkOpen = true;
        }
    }
    closeTrunk(){
        
        this.isTrunkOpen = false;
        
    }
};

class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
    openTrunk(){
        this.isTrunkOpen = false;
    }

    go(acceleration){
        if(this.speed <= 295){
            this.speed += this.acceleration;
        }
    }
};
const A = new RaceCar({brand: 'Toyota',model:'Corolla',acceleration: 20});
const B = new Car({brand: 'Tesla',model: 'Model 3'});
A.openTrunk();
A.go();
A.displayInfo();
B.displayInfo();

