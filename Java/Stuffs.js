const Bal = document.getElementById("balance");

export function Depositing() {
    const amount = parseFloat(document.getElementById("Ammount").value);
    Bal += amount;
    Bal.textContent = balance.toFixed(2);
    console.log(balance);
}

export function Withdrawing() {
    const amount = parseFloat(document.getElementById("Ammount").value);
    Bal -= amount;
    Bal.textContent = balance.toFixed(2);
    console.log(balance);
}