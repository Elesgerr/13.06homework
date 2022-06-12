function Calculate(){
    var amountinput = parseInt(document.getElementById("amount").value);
    var monthsinput = parseInt(document.getElementById("months").value);
    var percentinput = parseInt(document.getElementById("percent").value);

    var interest = amountinput*percentinput/100
    var total = interest+amountinput;
    var test2 = total/monthsinput

    document.getElementById("totalamount").innerHTML=total
    document.getElementById("monthpaymet").innerHTML=test2
    document.getElementById("interestt").innerHTML=interest
    
}

const display = document.querySelector('.display');
const all = document.querySelector('#all');

all.addEventListener('click', counter);

var value = 0;
function counter(e) {
  const all = e.target.id;
  if (all === 'increment') {
    value += 1;
  } else if (all === 'decrement') {
    value -= 1;
  } else {
    value = 0;
  }

    display.textContent = value;
}