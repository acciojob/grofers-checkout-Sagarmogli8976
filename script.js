function calculateTotal() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        let value = parseInt(price.innerText);
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Display total
    document.getElementById("ans").innerText = total;
}