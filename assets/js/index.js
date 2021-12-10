import './Assets/modal.js';

function render() {
  if (window.localStorage.getItem('portfolio') === null) {
    const json = '{items: []}';
      window.localStorage.setItem('portfolio', JSON.stringify(json));
    return;
  }
  console.log(JSON.parse(window.localStorage.getItem('portfolio')));
}

function addNewPurchase() {
  const currency = document.querySelector('.currency').value;
  const amount = document.querySelector('.amount').value;
  if (amount === null || typeof (parseInt(amount)) != 'number') {
    alert('Error. Invalid Input');
    return;
  }
  const data = JSON.parse(window.localStorage.getItem('portfolio'));
  console.log(data);
  data.items.push(`{"currency":${currency}, "amount":${amount}}`);
  window.localStorage.setItem('portfolio', JSON.stringify(data));
}
document.querySelector('.addNewPurchase').addEventListener('click', () => addNewPurchase());

render();
