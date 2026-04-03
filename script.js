function calculateTotal() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        let text = price.innerText;

        // Extract last number typed (important for Cypress test)
        let matches = text.match(/\d+/g);
        let value = matches ? parseInt(matches[matches.length - 1]) : 0;

        total += value;
    });

    document.getElementById("ans").innerText = total;
}