const billInput = document.querySelector("#bill-amount");
const peopleInput = document.querySelector("#number-of-people");
const tipPerPerson = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-per-person");
const calculate = document.querySelector('#calculate');

calculate.addEventListener('click',()=>{
    let percentage = parseFloat(document.querySelector('input[name="tip"]:checked').value);
    let tips=(billInput.value * percentage )/100;
    let total=(parseFloat(billInput.value) + tips)/parseFloat(peopleInput.value);
    tipPerPerson.innerHTML=tips.toFixed(2);
    totalPerPerson.innerHTML=total.toFixed(2);

})