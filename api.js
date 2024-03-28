var redis = require('redis');
const client = redis.createClient();
// const client = clientRedis.v4();

//* Redis 연결
// redis[s]://[[username][:password]@][host][:port][/db-number]
const redisClient = redis.createClient({
   url: `redis://127.0.0.1:6379/0`,
   legacyMode: true, // 반드시 설정 !!
});
redisClient.on('connect', async () => {
  // console.info('Redis connected!');
  await get_price();
});

redisClient.on('error', (err) => {
   console.error('Redis Client Error', err);
});

redisClient.connect().then(); // redis v4 연결 (비동기)
const redisCli = redisClient.v4; // 기본 redisClient 객체는 콜백기반인데 v4버젼은 프로미스 기반이라 사용

async function get_price() {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const r= await fetch('https://api.bithumb.com/public/ticker/ALL_KRW', options);
  const response= await r.json();
  // console.log(response);

  if(response.status === '0000') { 
    const res= response.data;

    await redisCli.set('swap_price:ETH', `${res.ETH.closing_price}:${res.date}`);
    await redisCli.set('swap_price:MATIC', `${res.MATIC.closing_price}:${res.date}`);

    console.log('ETH:', res.ETH.closing_price);
    console.log('MATIC:', res.MATIC.closing_price);
    console.log('date', res.date);
  } else {
    console.log('error');
  }
  process.exit(0);

};

// get_price().then();
