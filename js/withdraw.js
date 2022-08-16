// step 1: 
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // step 2: 
    const withdrawField = document.getElementById('withdraw-field');
    const NewWithdrawFieldString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(NewWithdrawFieldString);

    if(isNaN(newWithdrawFieldAmount)){
        alert('Please provide a valid number')
        return;
    }

    // step 3:
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5:
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     // last step: 
     withdrawField.value = '';

    // jodi balance theke besi taka withdraw korte chay 
    if(newWithdrawFieldAmount > previousBalanceTotal){
        alert('Not enough balance!!')
        return;
    }
    else if(newWithdrawFieldAmount <0 ){
        alert('please provide a valid number');
        return;
    }

    // step 4:
    const currentWithdraw = newWithdrawFieldAmount + previousWithdrawTotal;
    withdrawTotal.innerText = currentWithdraw;

    
    

    // step 6:
    const currentTotalBalance = previousBalanceTotal - newWithdrawFieldAmount;
    balanceTotal.innerText = currentTotalBalance;

   

})