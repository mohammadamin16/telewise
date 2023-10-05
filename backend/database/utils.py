from mongoengine import connect
from config import config_map
from flask import Flask
from flask_mongoengine import MongoEngine
# from database.models import Category, Tag
# from os import listdir
# from os.path import isfile, join
# import hashlib
# import jdatetime

def connect_to_db():
    app = Flask(__name__)
    app.config['MONGODB_SETTINGS'] = {
            'host': config_map['mongodb_host']
        }
    db = MongoEngine()
    db.init_app(app)

def clean_db():
    selected_db = connect(config_map['mongodb_name'])
    selected_db.drop_database(config_map['mongodb_name'])
    print('Dtabase cleaned successfully')

