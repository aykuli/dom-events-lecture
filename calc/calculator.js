class Calculator {
  constructor(prev, curr) {
    this.prev = prev;
    this.curr = curr;
    this.prevBtn = '';
  }

  clear() {
    this.prev.innerText = '';
    this.curr.innerText = '';
  }

  delete() {
    this.curr.innerText = this.curr.innerText.slice(0, -1);
  }

  append(val) {
    if (this.prevBtn === '=') {
      this.curr.innerText = '';
    }
    this.prevBtn = val;

    if (+val >= 0 || +val <= 9) {
      this.curr.innerText = this.curr.innerText + val;
    } else if (val === '.') {
      if (this.curr.innerText.includes('.')) return;
      if (this.curr.innerText === '') {
        this.curr.innerText = '0.';
        return;
      }
      this.curr.innerText += val;
    } else if (['*', '/', '+', '-'].includes(val)) {
      if (this.curr.innerText === '') return;
      if (this.prev.innerText === '') {
        this.prev.innerText = `${this.curr.innerText} ${val}`;
        this.curr.innerText = '';
      } else {
        const [prevVal, operand] = this.prev.innerText.split(' ');
        const res = this.calculate(prevVal, this.curr.innerText, operand);
        this.prev.innerText = `${res} ${val}`;
      }
      this.curr.innerText = '';
    }
  }

  getRes() {
    if (this.prev.innerText === '') return;
    const [prevVal, operand] = this.prev.innerText.split(' ');
    const res = this.calculate(prevVal, this.curr.innerText, operand);
    this.curr.innerText = res;
    this.prev.innerText = '';
    this.prevBtn = '=';
  }

  _calculate(prevVal, currValue, operand) {
    const [val0, val1] = [prevVal, currValue].map(num => Number(num));
    let res = 0;
    switch (operand) {
      case '+':
        res = val0 + val1;
        break;
      case '-':
        res = val0 - val1;
        break;
      case '*':
        res = val0 * val1;
        break;
      case '/':
        res = val0 / val1;
        break;
      default:
        break;
    }
    return res;
  }
}
