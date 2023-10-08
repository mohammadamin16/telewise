from flask import Response, request
from database.models import Payment, User, Chat, Balance
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

def get_chat_balances(positive_balances, negative_balances):
    result = []
    for balance in positive_balances:
        result.append(
            {
                "userId" : balance.receiver_user.user_id,
                "amount" : balance.amount
            }
        )
    for balance in negative_balances:
        result.append(
            {
                "userId" : balance.payer_user.user_id,
                "amount" : balance.amount * -1
            }
        )
    return result

class BalanceApi(Resource):
    def get(self):
        userId_param = request.args.get('userId')
        chat_param = request.args.get('chat')
        if userId_param and chat_param:
            requested_chat = Chat.objects.filter(chat_id = chat_param)
            if len(requested_chat)>0:
                requested_user = User.objects.filter(user_id = userId_param)
                if len(requested_user)>0:
                    # check if user is a member in this group
                    # debtor
                    # creditor
                    positive_balances = Balance.objects.filter(chat=requested_chat[0], payer_user=requested_user[0])
                    negative_balances = Balance.objects.filter(chat=requested_chat[0], receiver_user=requested_user[0])
                    return get_chat_balances(positive_balances, negative_balances), 200
                else:
                    return {"Error": "User does not exit."}, 404
            else:
                return {}, 200
        else:
            return {"Error": "Missing Argument (chat or userId)"}, 400
