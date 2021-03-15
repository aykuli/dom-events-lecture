const handleClickAttr = (t, e) => {
  console.log('t: ', t);
  console.log('e: ', e);
};

clickProp.onclick = (t, e) => {
  console.log('t: ', t);
  console.log('e: ', e);
};

const btn = document.querySelector('#addEv-click', true);
btn.addEventListener('click', e => {
  console.log('btn:', e.target);
  console.log('value:', e.target.value);
});
