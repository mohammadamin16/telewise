from flask import Response, request
from database.models import Transaction
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class TransactionApi(Resource):
    # decorators = [jwt_required()]

    def post(self):
        # return {'msg': 'transaction number {}'.format(id)}, 200
        body = request.get_json()
        for user_involved in body['group']:
            transaction = Transaction()
            transaction.title = body['title']
            transaction.description = body['description']
            transaction.chat_id = body['chat']
            transaction.payer_user_id = body['userId']
            transaction.in_debt_user_id = user_involved['userId']
            transaction.amount = user_involved['amount']
            transaction.save()
        return {'msg': 'transaction successfully added'}, 200
    

    def get(self):
        body = request.get_json()
        user_transactions = Transaction.objects(Q(payer_user_id=body['userId']) | Q(in_debt_user_id=body['userId']))
        return {'msg': 'fetched successfully{}'.format(len(user_transactions))}, 200