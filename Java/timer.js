const Depo = document.getElementById("Deposit");
const With = document.getElementById("Withdraw");
const Bal = document.getElementById("balance");
const Form = document.getElementById("transactionForm");

let balance = Math.floor(Math.random() * 1001);

import { initializeBalance } from "./Stuffs.js";
import { Depositing } from "./Stuffs.js";
import { Withdrawing } from "./Stuffs.js";

initializeBalance(balance, Bal);

document.addEventListener("DOMContentLoaded", function () {
    Bal.textContent = " a of Balance: $" + balance.toFixed(2);
    Form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

Depo.addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("Ammount").value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        Bal.textContent = "a of Balance: $" + balance.toFixed(2);
    }
});

With.addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("Ammount").value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        Bal.textContent = " a of Balance: $" + balance.toFixed(2);
    }
});