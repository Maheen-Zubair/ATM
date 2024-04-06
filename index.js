#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000;
let myPin = 123;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
// code for pincode
if (pinAnswer.pin == myPin) {
    console.log(" your pincode is correct!");
    //code for select options
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            Message: "please select option ",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    // code for selected option(withdraw)
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount >= myBalance) {
            console.log("you don't have that much balance. \n your balance is", myBalance);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is=${myBalance}`);
        }
        // code for selected option ( check balance)
    }
    else if (operationAns.operation === "check balance")
        console.log(`your balance is = ${myBalance}`); //wrote in template literals
    //code for fast cash
    else {
        let option1 = await inquirer_1.default.prompt([
            {
                name: "moreOptions",
                message: "select rupees for withdraw",
                type: "list",
                choices: [" 1000", "5000", "8000", "10,000"],
            },
        ]);
        console.log(` you withdraw ${option1.moreOptions} by fast cash.`);
        console.log(`your remaining balance is: ${(option1.moreOptions -= myBalance)}`);
    }
}
else {
    console.log("oops! your pincode is incorrect \n try again!");
}
