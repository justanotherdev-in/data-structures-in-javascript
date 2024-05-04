const map = new Map();

map.set("name", "John Doe");

map.set(1, true);

const obj = {
    firstname: "Dummy Name"
}

map.set(obj, 3);

// console.log(map);

// console.log(map.get(obj));

map.delete(2);
console.log(map);
