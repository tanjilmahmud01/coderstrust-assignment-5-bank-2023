

const depositBtn = document.getElementById('deposit-btn');


const addToDeposit = () => {
    const depositAmount = parseFloat(document.getElementById('deposit-input').value);



    if (depositAmount < 0 || document.getElementById('deposit-input').value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Deposit can not be empty or a negative number!',

        })
        // alert('Deposit can not be empty or a negative number!');
        document.getElementById('deposit-input').value = '';
    }

    else {

        

        let totalDeposit = parseFloat(document.getElementById('total-deposit').innerText);

        totalDeposit = totalDeposit + depositAmount;

        document.getElementById('total-deposit').innerText = totalDeposit;

        let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

        totalBalance = totalBalance + depositAmount;

        document.getElementById('total-balance').innerText = totalBalance;



        document.getElementById('deposit-input').value = '';

        let trxDate = new Date();

        trxDate = `${trxDate.getDate()}/${trxDate.getMonth() +1 }/${trxDate.getFullYear()} ${trxDate.toLocaleTimeString()}`;

        // console.log(trxDate);

        let newTrxRow = `
        <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>`;

        let newestRow = document.createElement('tr');



        let text1 = document.createTextNode('1');

        let col1 = document.createElement('th');

        col1.appendChild(text1);

        newestRow.appendChild(col1);

        // console.log(newestRow);

        let text2 = document.createTextNode(trxDate);

        let col2 = document.createElement('td');

        col2.appendChild(text2);

        newestRow.appendChild(col2);
        
        // console.log(newestRow);

        let text4 = document.createTextNode(depositAmount);
        let col4 = document.createElement('td');

        col4.appendChild(text4);
        newestRow.appendChild(col4);

        let text5 = document.createTextNode(0);
        let col5 = document.createElement('td');

        col5.appendChild(text5);
        newestRow.appendChild(col5);

        let text6 = document.createTextNode(totalBalance);
        let col6 = document.createElement('td');

        col6.appendChild(text6);
        newestRow.appendChild(col6);


        const tableBodyRef = document.getElementById('transaction-row').appendChild(newestRow);

        

        console.log(tableBodyRef.childNodes[2].innerText);


    }


}

depositBtn.addEventListener('click', addToDeposit);













const withdrawBtn = document.getElementById('withdraw-btn');


const addToWithdraw = () => {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-input').value);



    if (withdrawAmount < 0 || document.getElementById('withdraw-input').value === '' || withdrawAmount > parseFloat(document.getElementById('total-balance').innerText)) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Withdraw can not be empty or a negative number or greater than available balance!',

        })
        // alert('Withdraw can not be empty or a negative number or greater than available balance!');
        document.getElementById('withdraw-input').value = '';
    }

    else {
        let totalWithdraw = parseFloat(document.getElementById('total-withdraw').innerText);

        totalWithdraw = totalWithdraw + withdrawAmount;

        document.getElementById('total-withdraw').innerText = totalWithdraw;

        let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

        totalBalance = totalBalance - withdrawAmount;

        document.getElementById('total-balance').innerText = totalBalance;

        document.getElementById('withdraw-input').value = '';

        let trxDate = new Date();

        trxDate = `${trxDate.getDate()}/${trxDate.getMonth() +1 }/${trxDate.getFullYear()} ${trxDate.toLocaleTimeString()}`;

        // console.log(trxDate);

        let newTrxRow = `
        <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>`;

        let newestRow = document.createElement('tr');



        let text1 = document.createTextNode('1');

        let col1 = document.createElement('th');

        col1.appendChild(text1);

        newestRow.appendChild(col1);

        // console.log(newestRow);

        let text2 = document.createTextNode(trxDate);

        let col2 = document.createElement('td');

        col2.appendChild(text2);

        newestRow.appendChild(col2);
        
        // console.log(newestRow);

        let text4 = document.createTextNode(0);
        let col4 = document.createElement('td');

        col4.appendChild(text4);
        newestRow.appendChild(col4);

        let text5 = document.createTextNode(withdrawAmount);
        let col5 = document.createElement('td');

        col5.appendChild(text5);
        newestRow.appendChild(col5);

        let text6 = document.createTextNode(totalBalance);
        let col6 = document.createElement('td');

        col6.appendChild(text6);
        newestRow.appendChild(col6);


        const tableBodyRef = document.getElementById('transaction-row').appendChild(newestRow);

        

        console.log(tableBodyRef);
    }


}

withdrawBtn.addEventListener('click', addToWithdraw);



