class ObjectInJS {
  constructor(size, toString, valueOf) {
    this.size = size;
    this.toString = toString; // func
    this.valueOf = valueOf; // func
    this.keys = keys; //func
  }

  produce() {
    return new ObjectInJS(this.size, this.toString, this.valueOf, this.keys);
  }
}

const objectPrototype = new ObjectInJS(
  10,
  Object.toString,
  Object.valueOf,
  Object.keys
);

let obj1 = objectPrototype.produce();
let obj2 = objectPrototype.produce();
let obj3 = objectPrototype.produce();

obj1.keys = function () {
  return [];
};

obj3.valueOf = function () {
  return this;
};

// Make clone your entity by undependent way
