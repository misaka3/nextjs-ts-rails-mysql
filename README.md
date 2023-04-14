# README

### 初めにやること
作業ディレクトリにgit clone
```
$ mkdir {appName}
$ cd {appName}
$ git clone https://github.com/misaka3/flight_checker.git
```
imageのビルド、コンテナ作成
```
$ docker-compose up -d
```

### backend側対応
DB作成
```
$ docker compose exec api rails db:create
```

railsアプリ起動を確認
```
http://localhost:3001/
```

### frontend側対応
Reactアプリの起動
```
$ docker compose exec front bash
$ npm start
```

Reactアプリにアクセス
```
http://localhost:3000/
```
