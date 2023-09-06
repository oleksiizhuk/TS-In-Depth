/* eslint-disable no-underscore-dangle */

class Person12 {
  accessor name: string;

  constructor(name: string) {
      this.name = name;
  }
}

// TS make Person12 to in js ===> Person13
class Person13 {
    #__name: string;

    get name() {
        return this.#__name;
    }

    set name(name: string) {
        this.#__name = name;
    }

    constructor(name: string) {
        this.#__name = name;
    }

}
