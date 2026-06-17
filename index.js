async function convert() {
    const amount = Number(document.getElementById("input").value);
    const mycurrency = document.getElementById("inputcrncy").value;
    const value = document.getElementById("currency").value;
    const result = document.getElementById("result");

    if (amount <= 0 || isNaN(amount)) {
        result.innerHTML = "Please enter a valid amount";
        return;
    }

    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/553969882fea91be7871c63d/latest/${mycurrency}`
        );

        const data = await response.json();

        if (!data.conversion_rates) {
            result.innerHTML = "Could not get exchange rates";
            return;
        }

        const rate = data.conversion_rates[value];
        const convertedAmount = amount * rate;

        result.innerHTML =
            `${amount} ${mycurrency} = ${convertedAmount.toFixed(2)} ${value}`;

    } catch (error) {
        console.error(error);
        result.innerHTML = "Error fetching exchange rates";
    }
}