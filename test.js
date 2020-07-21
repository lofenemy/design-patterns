// Singleton
class Singleton {
  static instance = null;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

// builder

class Home {
  constructor() {
    // instead of getting all parameters from constructor and putting it from this place
    // let's use Home Builder with methods setRoof/setWindow/setFloor

    this.roof = null;
    this.door = null;
    this.window = null;
    this.floor = null;

    this.additionalStafs = null;
  }
}

class HomeBuilder {
  constructor(home) {
    this.home = home;
  }

  setRoof(roofType) {
    if (roofType == "dwqdqw") {
      roofType = "dd";
      this.home.roof = roofType;
    } else {
      this.home.roof = "test";
    }
  }

  setWindow(windowType) {
    if (windowType == "dwqdqw1") {
      windowType = "dd1";
      this.home.window = windowType;
    } else {
      this.home.window = "test1";
    }
  }

  // etc
}

// We create separated builder where we put logic of setters of home parametrs.

// Prototype

// instead of making new instances and call it a few times (when we want to create a copy)
// we use prototype which saves all parametrs inside and create new instances with these parameters

class People {
  constructor(name, surname, age, told, weight) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.told = told;
    this.weight = weight;
  }
}

class PeoplePrototype {
  constructor(name, surname, age, told, weight) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.told = told;
    this.weight = weight;
  }

  produce() {
    return new People(
      this.name,
      this.surname,
      this.age,
      this.told,
      this.weight
    );
  }
}

const andreiPrototype = new PeoplePrototype("Andrei", "Zen", 30, 40, 50);
const alexPrototype = new PeoplePrototype("Alex", "Zen", 30, 421, 4123);
const vladPrototype = new PeoplePrototype("Vladislau", "Zen", 421, 40, 50);

const Andrei1 = andreiPrototype.produce();
const Andrei2 = andreiPrototype.produce();

const Alex1 = alexPrototype.produce();
const Alex2 = alexPrototype.produce();
const Vlad1 = vladPrototype.produce();
