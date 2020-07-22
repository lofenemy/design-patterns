class HomeFactory {
  constructor(type) {
    if (type === "top") {
    }
  }
}

class TopHomeFactory {
  get(conditions) {
    if (conditions.includes("pool")) {
      return new TopHomeWithPool();
    } else if (conditions.includes("big")) {
      return new TopHomePenthouse();
    } else {
      return new TopHome();
    }
  }
}

class BadHomeFactory {
  get(conditions) {
    if (conditions.includes("1000$")) {
      return new BadHome();
    } else if (conditions.includes("1200$")) {
      return new BadHomeWithKitchen();
    } else if (conditions.includes("2000$")) {
      return new BadHomeWithBathroom();
    }
  }
}

class TopHome {}
class TopHomePenthouse {}
class TopHomeWithPool {}

class BadHome {}
class BadHomeWithKitchen {}
class BadHomeWithBathroom {}
