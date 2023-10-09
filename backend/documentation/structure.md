# Project Structure

## Technology

Backend side is using flask web framework in Python3. MongoDB is used as database.

## `./`

`config.py` contains the configurations needed in project.

`main.py` Handles running the web-server.

## `/database`

`models.py` structures the database models & relations.

`db.py` & `utils.py` Init & make connection with mongo.

## `/resources`

`routes` structures the routings.
`balance.py`, `pay.py`, `routes.py`, `test.py`		`transaction.py` & `user.py` Implement the APIs.
