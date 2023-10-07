from flask import Response, request
from database.models import Payment, User, Chat, Balance
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

def update_balance(chat, payer_user, receiver_user, amount):
    balance = Balance.objects.filter(chat=chat, payer_user=payer_user, receiver_user=receiver_user)
    if len(balance) > 0:
        balance = balance[0]
        balance.amount += amount
        if balance.amount == 0:
            balance.delete()
        else:
            balance.save()
        return
    balance = Balance.objects.filter(chat=chat, payer_user=receiver_user, receiver_user=payer_user)
    if len(balance) > 0:
        balance = balance[0]
        balance.amount -= amount
        if balance.amount == 0:
            balance.delete()
        else:
            balance.save()
        return
    balance = Balance()
    balance.chat = chat
    balance.payer_user = payer_user
    balance.receiver_user = receiver_user
    balance.amount = amount
    balance.save()
    return


class PayApi(Resource):
    # decorators = [jwt_required()]

    def post(self):
        body = request.get_json()
        if 'chat' in body and 'userId' in body and 'receiverUserId' in body and 'amount' in body:
            payment = Payment()
            
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

            requested_receiver_user = User.objects.filter(user_id = body['receiverUserId'])
            if len(requested_receiver_user) == 0:
                return {"Error": "Receiver User does not exit."}, 404
            else:
                requested_receiver_user = requested_receiver_user[0]
            if requested_payer_user == requested_receiver_user:
                return {"Error": "Can not pay yourself"}, 403
            payment.chat = requested_chat
            payment.payer_user = requested_payer_user
            payment.receiver_user = requested_receiver_user
            payment.amount = body['amount']
            payment.save()
            # Update balance
            if requested_payer_user != requested_receiver_user:
                update_balance(requested_chat, requested_payer_user, requested_receiver_user, body['amount'])
            return {'msg': 'payment made'}, 200
        else:
            return {"Error": "Missing Arguments (chat or userId or receiverUserId or amount)"}, 400

