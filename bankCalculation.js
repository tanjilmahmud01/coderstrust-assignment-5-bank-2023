

const depositBtn =  document.getElementById('deposit-btn');


const addToDeposit = () => {
    const depositAmount = parseFloat(document.getElementById('deposit-input').value);

    

    if(depositAmount < 0 || document.getElementById('deposit-input').value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Deposit can not be empty or a negative number!',
            
          })
        // alert('Deposit can not be empty or a negative number!');
        document.getElementById('deposit-input').value = '';
    }

    else{
    let totalDeposit = parseFloat(document.getElementById('total-deposit').innerText);

    totalDeposit = totalDeposit + depositAmount;

    document.getElementById('total-deposit').innerText = totalDeposit;

    let totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    
    totalBalance = totalBalance + depositAmount;

    document.getElementById('total-balance').innerText = totalBalance;

  

    document.getElementById('deposit-input').value = '';
    
   
    
    
    }

    
}

depositBtn.addEventListener('click', addToDeposit);


const withdrawBtn =  document.getElementById('withdraw-btn');


const addToWithdraw = () => {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-input').value);

    

    if(withdrawAmount < 0 || document.getElementById('withdraw-input').value === '' || withdrawAmount > parseFloat(document.getElementById('total-balance').innerText)) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Withdraw can not be empty or a negative number or greater than available balance!',
            
          })
        // alert('Withdraw can not be empty or a negative number or greater than available balance!');
        document.getElementById('withdraw-input').value = '';
    }

    else{
        let totalWithdraw = parseFloat(document.getElementById('total-withdraw').innerText);

        totalWithdraw = totalWithdraw + withdrawAmount;

    document.getElementById('total-withdraw').innerText = totalWithdraw;

    let totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    
    totalBalance = totalBalance - withdrawAmount;

    document.getElementById('total-balance').innerText = totalBalance;
    
    document.getElementById('withdraw-input').value = '';
    }

    
}

withdrawBtn.addEventListener('click', addToWithdraw);



