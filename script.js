function calculateTip() {
    let bill = document.querySelector("#bill").value;
    let tip = document.querySelector("#tipPercent").value;

    if (bill === "" || tip === "") {
        alert("Please enter both values!");
        return;
    }

    bill = parseFloat(bill);
    tip = parseFloat(tip);

    let tipAmount = (bill * tip) / 100;
    let total = tipAmount + bill;

    tipAmount = tipAmount.toFixed(2);
    total = total.toFixed(2);

    let display = document.querySelector("#result");
    display.innerHTML = `
        <strong>Tip:</strong> Rs ${tipAmount}<br>
        <strong>Total Bill:</strong> Rs ${total}
    `;
}
