import orderByProps from "./sorting.js";

const object = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80,
    defence: 40
};

console.log(orderByProps(object, ["name", "level"]));