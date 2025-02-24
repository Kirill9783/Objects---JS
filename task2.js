const cars = {
    bmw: {
        wheels: 4,
        hp: 300,
        doors: 2,
        isStarted: false,
        maxSpeed: 220
    },
    mercedes: {
        wheels: 4,
        hp: 250,
        doors: 3,
        isStarted: false,
        maxSpeed: 200
    },
    audi: {
        wheels: 4,
        hp: 320,
        doors: 4,
        isStarted: false,
        maxSpeed: 260
    }
}

//1 способ
Object.keys(cars).forEach((property) => {
    console.log(`${property}`);
})

console.log('------------------------------------------------');

//2 способ
function getCarName(object) {
    for (let key in object) {
        console.log(key);
    }
}
getCarName(cars);