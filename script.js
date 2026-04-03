let prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach(function (price) {
	total += Number(price.innerText);
});

let table = document.querySelector("table");

let row = document.createElement("tr");

let cell = document.createElement("td");
cell.colSpan = 2;
cell.innerText = total;

row.appendChild(cell);
table.appendChild(row);