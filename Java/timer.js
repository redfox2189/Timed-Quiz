const Submit = document.getElementById("SubBtn");
const Bal = document.getElementById("balance");
const Depo = document.getElementById("Deposit");
const With = document.getElementById("Withdraw");

import {Depositing, Withdrawing } from "./Stuffs.js";

Submit.addEventListener("click", function () {
    if (Depo.checked == true) {
    Depositing(Bal, balance, Depo);
    } else if (With.checked == true) {
    Withdrawing(Bal, balance, With);
    }
    else {
        alert("Please select Deposit or Withdraw");
    }
});