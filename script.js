// Create button
const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach((price) => {
        let text = price.innerText.trim();

        // Extract only numbers
        let numbers = text.match(/\d+/g);

        // Take LAST number (important for Cypress)
        let value = numbers ? parseInt(numbers[numbers.length - 1]) : 0;

        total += value;
    });

    document.getElementById("ans").innerText = total;
};

getSumBtn.addEventListener("click", getSum);