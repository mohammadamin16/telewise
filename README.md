# Telegram WebBot Contest

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
