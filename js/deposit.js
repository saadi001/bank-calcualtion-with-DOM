// step 1: add event listener to the deposit button 
document.getElementById('deposit-btn').addEventListener('click', function(){

    // step 2: get the value from input field 
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);

    // for clearing 
    depositField.value = '';

    // if anyone give value other than number or submit null value 
    if(isNaN(NewDepositAmount)){
        alert('please provide a valid number');
        return;
    }

    // if user give minus value
    if(NewDepositAmount<0){
        alert('please provide a valid number');
        return;
    }
    
    // step 3: find the current deposite value 
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // step 5: get the balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalElementString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalElementString);

    // sum of new deposit 
    const totalDeposit = PreviousDepositTotal + NewDepositAmount;

    // step 4: set the value in current deposit value 
    depositTotalElement.innerText = totalDeposit;

    

    // step 6: calculate the total balance 
    const currentTotalBalance = PreviousBalanceTotal + NewDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;



    // clearing deposit field 
    
})