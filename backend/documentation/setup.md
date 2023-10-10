# How to Setup

## Download & Start mongodb
follow the steps [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

if experiencing problems
checkout [here](https://askubuntu.com/questions/1402179/not-able-to-install-mongodb-in-ubuntu-22-04)

start the mongodb service:

`sudo service mongod start`

if command `mongo` works, setting-up mongodb is done.

change port of mongodb listening to  `27018` in `/etc/mongod.conf` file.

```
net:
  port: 27018
```

then restart the service

`sudo service mongod restart`

## Install python package manager (pip3)

`sudo apt install python3-pip`

## (Optional) Download & install & Activate virtualenv
> In order to keep your development environment clean, you can use virtualenv. to do so, follow the steps below:

```
pip3 install virtualenv
virtualenv venv
source ./venv/bin/activate
```

## Download & Install requirements of app
> Install the requirements mentioned in requirements.txt file.

`pip3 install -r requirements.txt`

## Run app

`python3 ./app.py --command run`
