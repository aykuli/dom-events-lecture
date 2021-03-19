const btns = document.querySelector('.btns');
const prev = document.querySelector('.result__prev');
const curr = document.querySelector('.result__curr');

const calc = new Calculator(prev, curr);

btns.addEventListener('click', e => {
  const value = e.target.innerText || '';
  switch (value) {
    case 'AC':
      calc.clear();
      break;
    case 'DEL':
      calc.delete();
      break;
    case '=':
      calc.getRes();
      break;
    default:
      calc.append(value);
  }
});
