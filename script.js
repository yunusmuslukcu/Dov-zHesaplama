const currencyFirst = document.getElementById("currencyFirst");
const currencySecond = document.getElementById("currencySecond");
const count = document.getElementById("count");
const equal = document.getElementById("equal");
const exchangeRate = document.getElementById("exchangeRate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/e6d36dc28d9c16799cb20f42/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecond.value];
            const total = (count.value * rate).toFixed(2);

            equal.textContent = `${total} ${currencySecond.value}`;
            exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
        })
   
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);

updateRate(); // Sayfa yüklenince çalışsın