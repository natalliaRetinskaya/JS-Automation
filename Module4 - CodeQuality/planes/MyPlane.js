const plane = require('./Plane');

class MyPlane extends plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    }
}