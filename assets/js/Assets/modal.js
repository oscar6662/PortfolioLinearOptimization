var modal = document.getElementById("myModal");

function newPurchase () {
  modal.style.display = "block";
}

function close () {
  modal.style.display = "none";
}

document.querySelector('.newpurchase').addEventListener('click', () => newPurchase());
document.querySelector('.close').addEventListener('click', () => close());
