const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.bithumb.com/public/ticker/ALL_KRW', options)
  .then(response => response.json())
  .then(response => {

    if(response.status === '0000'){ 
      const res= response.data;
      console.log('ETH', res.ETH);
      console.log('MATIC', res.MATIC);
      console.log('date', res.date);
    } else {
      console.log('error');
    }
  })
  .catch(err => console.error(err));
