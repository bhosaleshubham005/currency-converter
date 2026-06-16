async function convert() {

const amount= document.getElementById("input").value ;
const value = document.getElementById("currency").value ; 
const Result = document.getElementById("result") ;

   if (!amount) {
        Result.innerHTML = "Please enter an amount";
        return;
    }

    try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/553969882fea91be7871c63d/latest/USD"
        );

        const data = await response.json();

        const rate = data.conversion_rates[value];
        const convertedAmount = amount * rate;

        Result.innerHTML =
           `${amount} USD = ${convertedAmount.toFixed(3)} ${value}`;

    } catch (error) {
        Result.innerHTML = "Error fetching exchange rates";
        console.error(error);
    }
}
