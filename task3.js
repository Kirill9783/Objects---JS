const car = {
    name: 'Haval',
    hp: 198
}

//1 способ
function createCar(object) {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    }
    return Object.assign(object, baseCar);
}
console.log(createCar(car));

console.log('------------------------------------------------');

//2 способ
function createCar2(object) {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    }
    return {
        ...object,
        ...baseCar
    };
}
console.log(createCar2(car));

