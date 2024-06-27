class Calculation {
  constructor() {
    this.calculationLine = "";
  }

  setterCalculationLine(value) {
    this.calculationLine = value;
  }

  setLastSymbolCalculationLine(symbol) {
    this.calculationLine += symbol;
  }

  getterCalculationLine() {
    return this.calculationLine;
  }

  getLastSymbol() {
    return this.calculationLine.slice(-1);
  }

  deleteLastSymbol() {
    this.calculationLine = this.calculationLine.slice(0, -1);
  }
}

const calc = new Calculation();
calc.setterCalculationLine("A B C");
console.log(calc.getterCalculationLine());

calc.setLastSymbolCalculationLine(" D");
console.log(calc.getterCalculationLine());

console.log(calc.getLastSymbol());

calc.deleteLastSymbol();
console.log(calc.getterCalculationLine());
