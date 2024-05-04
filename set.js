const set = new Set();

set.add(1);
set.add("John");

const obj = {
    firstname: "dummy"
}
set.add(obj);

set.add(1);
console.log(set);
console.log(set.delete(1))
console.log(set);

