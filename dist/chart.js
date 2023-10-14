

// const balance = parseFloat(document.getElementById('total-balance').innerText);

const ctx = document.getElementById('myChart');

const chart =  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Deposit', 'Withdraw', 'Balance'],
      datasets: [{
        label: 'Tk',
        data: [0,0,0],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const depositBtn =  document.getElementById('deposit-btn');

  depositBtn.addEventListener('click', () => {
     const totalDeposit = parseFloat(document.getElementById('total-deposit').innerText);
    
     chart.data.datasets[0].data[0] = totalDeposit;

     const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

     chart.data.datasets[0].data[2] = totalBalance;
     chart.update();
  })

  const withdrawBtn =  document.getElementById('withdraw-btn');

  withdrawBtn.addEventListener('click', () => {
    const totalWithdraw = parseFloat(document.getElementById('total-withdraw').innerText);
    chart.data.datasets[0].data[1] = totalWithdraw;
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

     chart.data.datasets[0].data[2] = totalBalance;
    chart.update();

  })