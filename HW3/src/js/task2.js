let a =+ prompt("Укажите сторону 'a':");
let b =+ prompt("Укажите сторону 'b':");
let alph =+ prompt("Укажите угол 'α':");

function func(a, b, alph) {
    let c = parseFloat(Math.sqrt((Math.pow(a, 2) + Math.pow(b,2)) - (2*(a*b)) * Math.cos(alph * Math.PI / 180)).toFixed(2));
    let P = a + b + c;
    let p = P/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));


    console.log(`Сторона с равна:  ${c}\n
    Площадь триугольника: ${Math.round(S)}\n
   Периметр триугольника: ${P.toFixed(2)}`);
}


func(a, b, alph);
