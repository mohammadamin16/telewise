# TeleWise
the splitwise alternative for telegram

ever had to manage your expenses with your firends in chat?
It's not the easiest thing, there are solutions outside of telegram, but with the features that telegram miniapp provides,
adding transactions and settling up can become easier than ever

To use it, your have to share this link with your friends t.me/the_telewise_bot/app (in a private chat or group chat) 

## setup frontend
```
  cd web
  yarn install
  yarn dev
```

## setup backend
```
  cd backend
```
### Download & Start mongodb
```
sudo apt install mongodb
sudo service mongodb start
```
### Download & install & Activate virtualenv
```
pip3 install virtualenv
virtualenv venv
source ./venv/bin/activate
```
### Download & Install requirements of app & run app
```
pip3 install -r requirements.txt
python3 ./app.py --command run
```

## (Optional) setup app using docker
```
  docker compose up
```
