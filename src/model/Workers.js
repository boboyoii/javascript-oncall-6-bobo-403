class Workers {
  #names;
  #pos;
  #skip;

  constructor(workers) {
    this.#names = workers;
    this.#pos = 0;
    this.#skip = 0;
  }

  pickNext(before) {
    let next = this.#names[this.#pos];
    if (before === next) {
      next = this.#names[(this.#pos + this.#skip + 1) % this.#names.length];
      this.#skip += 1;
    }
    this.#pos = (this.#pos + this.#skip + 1) % this.#names.length;
    this.#skip = 0;
    return next;
  }
}

export default Workers;
