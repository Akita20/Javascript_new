function getIntoCar(Callback){
        return new Promise ( (resolve) => {
                console.log("Get Into the car");
                resolve();
        })
        
       
}

function startCar(){
        return new Promise ( (resolve) => {
                console.log("Car started");
                resolve();
        })
         
}

function drive(){
        return new Promise ( (resolve) => {
                console.log("Driving the car");
                resolve();
        })
         
}
getIntoCar()
.then( (result) => startCar())
.then( (result) => drive());

