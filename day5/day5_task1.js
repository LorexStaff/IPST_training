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

  setRate(newRate) {
    this.#rate = newRate;
  }

  getDays() {
    return this.#days;
  }

  setDays(newDays) {
    this.#days = newDays;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}

const worker1 = new Worker("Иван", "Иванов", 10, 25);
console.log(worker1.getRate());
worker1.setRate(12);
console.log(worker1.getRate());

console.log(worker1.getDays());
worker1.setDays(30);
console.log(worker1.getDays());

console.log(worker1.getSalary());
