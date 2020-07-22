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
  },
  poor: {
    roof: "bad",
    door: "the wors",
    window: "bad",
  },
  typical: {
    roof: "ok",
    door: "ok",
    window: "ok",
  },
};

class FactoryHome {
  constructor(homeType) {
    const { roof, door, window } = homeTypes[homeType];

    return new Home(roof, door, window);
  }
}

// We move logic on creating new instance on special factory class and hide the logic of creating the difference by type homes
