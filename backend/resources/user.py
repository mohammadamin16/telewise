from flask import Response, request
# from database.models import Peer, User, Chat
from database.models import Peer
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class UserApi(Resource):

    def post(self):
        body = request.get_json()
        peer = Peer()
        peer.chat_id = body['chat']
        peer.user_id = body['userId']
        peer.save()
        return {'msg': 'done'}, 200





    
    def get(self):
        body = request.get_json()
        users_in_peer = Peer.objects(Q(chat_id=body['chat']))
        li = []
        for user in users_in_peer:
            li.append(user.user_id)
        return {"{}".format(body['chat']): li}, 200







