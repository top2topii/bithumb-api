# 빗썸 API를 이용하여 ETH, MATIC 을 KRW로 가져오자
- https://apidocs.bithumb.com/reference/%ED%98%84%EC%9E%AC%EA%B0%80-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C-all
- https://apidocs.bithumb.com/reference/%ED%98%84%EC%9E%AC%EA%B0%80-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C

# Crontab 설치
- https://change-words.tistory.com/entry/amazon-linux-crontab
- install:
```sh
sudo yum install cronie
sudo systemctl status crond
sudo systemctl start crond
sudo systemctl enable crond
```
- setting
```sh
crontab -e
```
- setting review
```sh
- crontab -l
# 매분 run.sh 실행(bithumb-api)
* * * * * /home/app/tokenswap/backend/bithumb-api/run.sh > /home/app/tokenswap/backend/bithumb-api/run.log 2>&1
```
- run.sh 내용
```sh
#!/bin/sh
NODE="/home/omadm/.nvm/versions/node/v18.19.0/bin/node"
cd /home/app/tokenswap/backend/bithumb-api
$NODE ./api.js
```

## date 처리
```js
const unixTimestamp = 1711687495772;
const date = new Date(unixTimestamp );
const timeString = date.toLocaleString();

console.log(timeString);
```
