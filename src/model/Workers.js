class Workers {
  #names;
  #pos;
  #skip;

  constructor(workers) {
    this.#names = workers;
    this.#pos = 0;
    this.#skip = 0;
  }

  getNext(before) {
    let next = this.#names[this.#pos];
    if (before === next) {
      this.#skip += 1;
      return this.#names[(this.#pos + 1) % this.#names.length];
    }
    this.#pos = (this.#pos + this.#skip) % this.#names.length;
    this.#skip = 0;
    return next;
  }
}

export default Workers;
