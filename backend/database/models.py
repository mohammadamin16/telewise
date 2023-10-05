from .db import db
import datetime


class Transaction(db.Document):
    transaction_id = db.IntField(required=True)
    title = db.StringField(required=True)
    description = db.StringField(max_length=64)
    chat = db.ReferenceField(Chat, required=True)
    payer_user = db.ReferenceField(User, required=True)
    in_debt_user = db.ReferenceField(User, required=True)
    amount = db.IntField(required=True)
    date = db.DateTimeField(required=True, default=datetime.datetime.utcnow)


class Payment(db.Document):
    chat = db.ReferenceField(Chat, required=True)
    payer_user = db.StringField(required=True)
    receiver_user = db.StringField(required=True)
    amount = db.IntField(required=True)
    date = db.DateTimeField(required=True, default=datetime.datetime.utcnow)


class Peer(db.Document):
    chat = db.ReferenceField(Chat, required=True)
    user = db.ReferenceField(User, required=True)
    date = db.DateTimeField(required=True, default=datetime.datetime.utcnow)


class Chat(db.Document):
    chat_id = db.StringField(required=True)


class User(db.Document):
    name = db.StringField(required=True)
    user_id = db.StringField(required=True)

