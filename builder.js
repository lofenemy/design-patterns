class House {
  constructor() {
    this.wallNumber = null;
    this.wallColor = null;
    this.doorType = null;
    this.roofQuality = null;
  }
}

class HouseBuilder {
  constructor(House) {
    this.house = new House();
  }

  setWallNumber(value) {
    this.house.wallNumber = value;

    if (value === 4) {
      this.wallColor = "red";
    } else {
      this.wallColor = "green";
    }

    return this; // just for beautiful looking
  }

  setWallColor(color) {
    this.house.wallColor = color;
    return this; // just for beautiful looking
  }

  setDoorType(type) {
    this.house.doorType = type;
    return this; // just for beautiful looking
  }

  build() {
    return this.house;
  }
}

const goodHouse = new HouseBuilder()
  .setWallNumber(10)
  .setWallColor("green")
  .setDoorType("best")
  .build();

const badHouse = new HouseBuilder()
  .setWallNumber(2)
  .setWallColor("pink")
  .setDoorType("pink")
  .build();

// the main idea:
// separate the setting of parametrs on step by step mechanism
// +/therefore - decrease responsibility of constructor
// and make the process of creating object as consistent process with his own responsibilities
