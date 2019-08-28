let sum =+ prompt("Введите сумму");
let discount =+ prompt("Введите процент скидки");
let result;
let saved;

if (sum !== "" && discount !== ""){
    result = (sum/100)*discount;
    saved = sum - result;
    console.log(`Price without discount: ${sum}\n
    Discount: ${discount.toString()}%\n
    Price with discount: ${(saved.toFixed(2)*100)/100}\n
    Saved: ${(result.toFixed(2)*100)/100}`);
}
