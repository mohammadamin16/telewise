from flask import Response, request
from database.models import Peer, User, Chat
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class UserApi(Resource):
    def post(self):
        body = request.get_json()
        if 'chat' in body and 'name' in body and 'userId' in body:
            requested_user = User.objects.filter(user_id = body['userId'])
            if len(requested_user) == 0:
                requested_user = User(name = body['name'], user_id = body['userId'])
                requested_user.save()
            else:
                requested_user = requested_user[0]
            requested_chat = Chat.objects.filter(chat_id = body['chat'])
            if len(requested_chat) == 0:
                requested_chat = Chat(chat_id = body['chat'])
                requested_chat.save()
            else:
                requested_chat = requested_chat[0]
            requested_peer = Peer.objects.filter(chat=requested_chat, user=requested_user)
            if len(requested_peer) == 0:
                peer = Peer(chat=requested_chat, user=requested_user)
                peer.save()
                return {'msg': 'done'}, 200
            else:
                return {'Error': 'user already exists'}, 409
        else:
            return {"Error": "Missing Arguments (chat or name or userId)"}, 400

    
    def get(self):
        # body = request.get_json()
        user_has_access = False
        userId_param = request.args.get('userId')
        chat_param = request.args.get('chat')
        if userId_param and chat_param:
            requested_user_id = userId_param
            requested_chat = Chat.objects.filter(chat_id = chat_param)
            if len(requested_chat) > 0:
                users_in_peer = Peer.objects.filter(chat=requested_chat[0])
                li = []
                for user_in_peer in users_in_peer:
                    if user_in_peer.user.user_id == requested_user_id:
                        user_has_access = True
                    li.append({"userId": user_in_peer.user.user_id, "name": user_in_peer.user.name})
                if user_has_access:
                    return {"{}".format(chat_param): li}, 200
                else:
                    return {"Error": "You are not a member of this group."}, 403
            else:
                return {"Error": "Chat does not exit."}, 404
        else:
            return {"Error": "Missing Argument (chat or userId)"}, 400