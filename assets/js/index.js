import './Assets/modal.js';

function render() {
  const data = JSON.parse(window.localStorage.getItem('portfolio'));
  if (data === null) {
    const json = { items: [] };
    window.localStorage.setItem('portfolio', JSON.stringify(json));
    return;
  }
  console.log( data);
  const mystuff = document.querySelector('.mystuff');
  console.log(data.items[0]);
  for(let item in data.items) {
    console.log(item);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${data.items[item].currency}, ${data.items[item].amount}`));
    li.setAttribute("id", "element4");
    mystuff.appendChild(li);
  }
}

function addNewPurchase() {
  const currency = document.querySelector('.currency').value;
  const amount = document.querySelector('.amount').value;
  if (amount === null || typeof (parseInt(amount)) != 'number') {
    alert('Error. Invalid Input');
    return;
  }
  let data = JSON.parse(window.localStorage.getItem('portfolio'));
  console.log(data);
  data.items.push({ "currency": currency, "amount": amount });
  window.localStorage.setItem('portfolio', JSON.stringify(data));
}
document.querySelector('.addNewPurchase').addEventListener('click', () => addNewPurchase());

render();
