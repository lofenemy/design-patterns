class Home {
  constructor(roofType, floorType, doorType, windowType) {
    this.roofType = roofType;
    this.floorType = floorType;
    this.doorType = doorType;
    this.windowType = windowType;
  }
}

const homeTypes = {
  expensive: {
    roof: "Top",
    door: "the Best",
    window: "Normal",
    floor: "ok",
  },
  poor: {
    roof: "bad",
    door: "the wors",
    window: "bad",
    floor: "ok",
  },
  typical: {
    roof: "ok",``
    door: "ok",
    floor: "ok",
    window: "ok",
  },
};

class FactoryHome {
  static build(homeType) {
    const { roof, door, window, floor } = homeTypes[homeType];

    return new Home(roof, floor, door, window);
  }
}

// We move logic on creating new instance on special factory class and hide the logic of creating the difference by type homes
