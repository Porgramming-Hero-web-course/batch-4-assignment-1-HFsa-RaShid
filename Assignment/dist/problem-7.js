"use strict";
{
    //
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const result = currentYear - this.year;
            return result;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
    //
}
