const sdk = require('api')('@bithumb-api-docs/v1.2.0#jfa3gjl1wz0f2l');

// sdk.all({payment_currency: 'KRW'})
//   .then(({ data }) => {
//     console.log(data.ETH);
//     console.log(data.MATIC);
//   })
//   .catch(err => console.error(err));
//

sdk.all({payment_currency: 'KRW'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
