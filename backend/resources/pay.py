from flask import Response, request
from database.models import Payment, User, Chat
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

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
            
            payment.chat = requested_chat
            payment.payer_user = requested_payer_user
            payment.receiver_user = requested_receiver_user
            payment.amount = body['amount']
            payment.save()
            return {'msg': 'payment made'}, 200
        else:
            return {"Error": "Missing Arguments (chat or userId or receiverUserId or amount)"}, 400

