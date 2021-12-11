import './Assets/modal.js';

function render() {
  const data = JSON.parse(window.localStorage.getItem('portfolio'));
  if (data === null) {
    const json = { items: [] };
    window.localStorage.setItem('portfolio', JSON.stringify(json));
    return;
  }
  const mystuff = document.querySelector('.mystuff');
  for(let item in data.items) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${data.items[item].currency}, ${data.items[item].amount}`));
    li.setAttribute("id", "element4");
    mystuff.appendChild(li);
  }
}


let  model = {
    "optimize": "capacity",
    "opType": "max",
    "constraints": {
        "plane": {"max": 44},
        "person": {"max": 512},
        "cost": {"max": 300000}
    },
    "variables": {
        "brit": {
            "capacity": 20000,
            "plane": 1,
            "person": 8,
            "cost": 5000
        },
        "yank": {
            "capacity": 30000,
            "plane": 1,
            "person": 16,
            "cost": 9000
        }
    },
};
 
const results = solver.Solve(model);
console.log(results);

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
