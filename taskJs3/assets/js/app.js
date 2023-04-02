const money_slide = document.querySelector('#Money_Slide');
const money_number = document.querySelector('#Money_Number');

const month_slide = document.querySelector('#Month_Slide');
const month_number = document.querySelector('#Month_Number');

const percent_slide = document.querySelector('#Percent_Slide');
const percent_number = document.querySelector('#Percent_Number');

const monthly_payment = document.querySelector('#Monthly_Payment');
const total_amount = document.querySelector('#Total_Amount');

var m=100; // bunlari reqem oldugunu bildirmek ucun yazmisam. qiymetleri neyese tessir etmir. calc() cagrilmadigi ucun.
var mth = 12; 
var p = 11.9;

console.log(typeof(money_number.value));
console.log(money_number.value);

//Money
money_slide.addEventListener('input', (event) => {
    money_number.value = event.target.value;
    m = event.target.value;
    Calc();
    Calc_Total()
});

money_number.addEventListener('input', (event) => {
    if (event.target.value <= 0) event.target.value = 1;
    if (event.target.value > 35000) event.target.value = 35000;
    money_slide.value = event.target.value;
    m = event.target.value;
    Calc();
    Calc_Total()
});

//Month
month_slide.addEventListener('input', (event) => {
    month_number.value = event.target.value;
    mth = event.target.value;
    Calc();
    Calc_Total()
});

month_number.addEventListener('input', (event) => {
    if (event.target.value <= 0) event.target.value = 1;
    if (event.target.value > 59) event.target.value = 59;
    month_slide.value = event.target.value;
    mth = event.target.value;
    Calc();
    Calc_Total()
});

//Percent
percent_slide.addEventListener('input', (event) => {
    percent_number.value = event.target.value;
    p = event.target.value;
    Calc();
    Calc_Total()
});

percent_number.addEventListener('input', (event) => {
    if (event.target.value < 11.9) event.target.value = 11.9;
    if (event.target.value > 20.9) event.target.value = 20.9;
    percent_slide.value = event.target.value;
    p = event.target.value;
    Calc();
    Calc_Total()
});

// calculation
function Calc() {
    var mp = (parseFloat(m) + (parseFloat(m) * ((parseFloat(p) / 12) / 100)) * parseFloat(mth)) / parseFloat(mth);
    monthly_payment.innerHTML = mp.toFixed(2) + ' Azn';
}
function Calc_Total() {
    var ta = (parseFloat(m) + (parseFloat(m) * ((parseFloat(p) / 12) / 100)) * parseFloat(mth));
    total_amount.innerHTML = ta.toFixed(2) + ' Azn';
}




