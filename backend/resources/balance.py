from flask import Response, request
# from database.models import Post
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class BalanceApi(Resource):
    def get(self):
        body = request.get_json()
        if 'chat' in body and 'userId' in body:
            return {
                '{}'.format(body['userId']):
                    [
                        {
                            'userId' : "1001",
                            "amount" : -500
                        },
                        {
                            'userId' : "1003",
                            "amount" : 200
                        }
                    ]
            }, 200
        else:
            return {"Error": "Missing Argument (chat or userId)"}, 400