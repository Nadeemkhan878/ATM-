import inquirer from "inquirer";

let MyBelence =500000; //Dollar
let MyPin =4258;





let PinAnswer = await inquirer.prompt({
    name:"pin",
    message: "Enter Your Pin",
    type: "number",

}
)
if (PinAnswer.pin == 4258){
    console.log("Correct Pin code!!")

    









    //ye wala option select karny k liye use hota hai.
    let operationAns = await inquirer.prompt([{
        name:"operation",
        message:"Please Select option",
        type:"list",
        choices:["Withraw","Check Balance",]
    }]);




    // console.log(operationAns);









//withraw wala option esy on karna hai
    if (operationAns.operation == "Withraw"){
        let amountAns = await inquirer.prompt([{
            name:"Amount",
            message:"Enter your Amount",
            type:"number"
        }])

        //=,-=,+=  chek balence wala option essy on karna hai
        MyBelence-=amountAns.Amount;

        console.log("your remining balance is:" + MyBelence)
        
    }
        
    
    else if (operationAns.operation === "Check Balance"){
        console.log("your balance is " + MyBelence);

    }
}
else{
    console.log("wrong pin please try again latter")
}
