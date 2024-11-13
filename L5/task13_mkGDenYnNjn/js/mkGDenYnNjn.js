let exch_table_UAH = [
    {currency: 'USD', buy_koef: 41.50},
    {currency: 'EUR', buy_koef: 44.75},
    {currency: 'GBP', buy_koef: 53.25},
    {currency: 'CHF', buy_koef: 47.28},
    {currency: 'CAD', buy_koef: 29.26},
    {currency: 'AUD', buy_koef: 25.03},
    {currency: 'PLN', buy_koef: 10.220},
    {currency: 'HUF', buy_koef: 0.090}
]; //2024-11-09 https://goverla.ua/

console.log(exch_table_UAH);

let exch_table_UAH_find = (curr) => {
    let tres = -1;
    for (const el of exch_table_UAH){
        if (curr===el.currency) {tres=el.buy_koef}
    }
    return tres;
}

console.log('CAD', exch_table_UAH_find('CAD'));

let m_exchange = (sumUAH,exchangeCurrency) => {
    let k = exch_table_UAH_find(exchangeCurrency);
    if (k!==-1){
        return sumUAH / k;
    } else {
        return -1;
    }
}

console.log('USD', m_exchange(10000,'USD'));
console.log('EUR', m_exchange(10000,'EUR'));
console.log('CZK', m_exchange(10000,'CZK'));