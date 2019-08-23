let x = prompt('Введите сумму');
let y = prompt('Введите процент скидки');
let seved;

let sum = parseInt(x);
let discount = parseInt(y);

if (sum !== '' && discount !== ''){
    seved = (sum/100)*discount;
    console.log((sum - seved).toFixed(2));
}
