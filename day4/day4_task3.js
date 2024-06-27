class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  getName() {
    return this.#name;
  }

  getSurname() {
    return this.#surname;
  }

  getRate() {
    return this.#rate;
  }

  getDays() {
    return this.#days;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}

const worker1 = new Worker("Иван", "Иванов", 10, 25);
console.log(worker1.getName());
console.log(worker1.getSurname());
console.log(worker1.getRate());
console.log(worker1.getDays());
console.log(worker1.getSalary());
