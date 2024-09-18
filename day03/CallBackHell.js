
function getIntoCar(Callback){
        console.log("Get Into the car");
        callback();
}

function startCar(callback){
        console.log("Car started");
        callback();
}

function drive(callback){
        console.log("Driving the car");
        callback();
}

        startCar(() => {
            drive(() => {
                console.log("Car is driving");
            });
        });
        
  // callback hell
    // nested callbacks can make the code hard to read and maintain

