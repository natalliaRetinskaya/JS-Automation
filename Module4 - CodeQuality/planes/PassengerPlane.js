const plane = require('./Plane');

class PassengerPlane extends plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }
    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;