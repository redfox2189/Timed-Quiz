export function Depositing(balance, Depo, Bal) {
    Depo.addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("Ammount").value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            Bal.textContent = "a of Balance: $" + balance.toFixed(2);
        }
    });
}

export function Withdrawing(balance, With, Bal) {
    With.addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("Ammount").value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            Bal.textContent = " a of Balance: $" + balance.toFixed(2);
        }
    });
}