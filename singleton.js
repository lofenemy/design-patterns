class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

// use static value of class to save instance. We can also use external variable.`
