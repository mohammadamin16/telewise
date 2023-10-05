from flask import Response, request
from database.models import Transaction, Chat, User
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

def get_next_free_transaction_id():
    try:
        return Transaction.objects.first().transaction_id + 1
    except:
        return 1

class TransactionApi(Resource):
    # decorators = [jwt_required()]

    def post(self):
        body = request.get_json()
        if 'title' in body and 'description' in body and 'chat' in body and 'userId' in body and 'userId' in body and 'amount' in body:
            requested_chat = Chat.objects.filter(chat_id = body['chat'])
            if len(requested_chat) == 0:
                return {"Error": "Chat does not exit."}, 404
            else:
                requested_chat = requested_chat[0]
            
            requested_payer_user = User.objects.filter(user_id = body['userId'])
            if len(requested_payer_user) == 0:
                return {"Error": "Payer User does not exit."}, 404
            else:
                requested_payer_user = requested_payer_user[0]
            
            users_involved = []
            for user_involved in body['group']:
                if 'userId' in user_involved and 'amount' in user_involved:
                    in_debt_user = User.objects.filter(user_id = user_involved['userId'])
                    if len(requested_payer_user) == 0:
                        return {"Error": "At least one of In-Debt Users does not exit."}, 404
                    users_involved.append({"user": in_debt_user[0], "amount": user_involved['amount']})
                else:
                    return {"Error": "Missing Arguments (userId or amount)"}, 400
            
            transaction_id = get_next_free_transaction_id()
            for user_involved in users_involved:
                transaction = Transaction()
                transaction.transaction_id = transaction_id
                transaction.chat = requested_chat
                transaction.payer_user = requested_payer_user
                transaction.in_debt_user = user_involved['user']
                transaction.title = body['title']
                transaction.description = body['description']
                transaction.amount = user_involved['amount']
                transaction.save()
            return {'msg': 'transaction successfully added'}, 200
        else:
            return {"Error": "Missing Arguments (title or description or chat or userId or userId or amount)"}, 400

    def get(self):
        body = request.get_json()
        if 'chat' in body and 'userId' in body:
            user_transactions = Transaction.objects((Q(payer_user_id=body['userId']) | Q(in_debt_user_id=body['userId'])) & Q(in_debt_user_id=body['userId']))
            return {'msg': 'fetched successfully{}'.format(len(user_transactions))}, 200
        else:
            return {"Error": "Missing Arguments (chat or userId)"}, 400