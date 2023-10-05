from flask import Response, request
from database.models import Payment
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class PayApi(Resource):
    # decorators = [jwt_required()]

    def post(self):
        body = request.get_json()
        payment = Payment()
        payment.chat_id = body['chat']
        payment.payer_user_id = body['userId']
        payment.receiver_user_id = body['receiverUserId']
        payment.amount = body['amount']
        payment.save()
        return {'msg': 'payment made'}, 200
