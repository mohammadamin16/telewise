from flask import Response, request
from database.models import Peer, User, Chat
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class UserApi(Resource):

    def post(self):
        body = request.get_json()
        if 'chat' in body and 'userId' in body and 'name' in body:
            chat = Chat(chat_id = body['chat'])
            user = User(name=body['name'], user_id=body['userId'])
            user_in_peer = Peer(chat=chat, user=user)

            if not Chat.objects(Q(chat_id=body['chat'])):
                chat.save()
            if not User.objects(Q(user_id=body['userId'])):
                user.save()
            # try to make Peer
            user_in_peer.save()
            # if peer already exists:
            #     return {'error': 'user already exists'}, 409
            # else:
            #     user_in_peer.save()
            #     # users_in_peer = Peer.objects(chat=body['chat'])
            user_in_peer = users_in_peer.to_json()
            return Response(users_in_peer, mimetype="application/json", status=201)
        else:
            return {"Error": "Missing Arguments chat or userId or name"}, 400
        # return {'msg': 'User registered'}, 200

        # if post:
        #     post = post[0]
        #     for u in post.likes:
        #         if user_id == u.id:
        #             return {'msg': 'already liked'}, 200
        #     post.likes.append(user_id)
        #     post.save()
        #     return {'msg': 'post liked'}, 201
        # else:
        #     return {'Error': 'Post not found'}, 404

        # user_id = get_user_id(get_jwt_identity())
        # post = Post.objects(Q(id=id))
        # if post:
        #     post = post[0]
        #     for u in post.likes:
        #         if user_id == u.id:
        #             return {'msg': 'already liked'}, 200
        #     post.likes.append(user_id)
        #     post.save()
        #     return {'msg': 'post liked'}, 201
        # else:
        #     return {'Error': 'Post not found'}, 404

    def get(self):
        body = request.get_json()
        if 'chat' in body:
            print("=========================")
            # print(body['chat'])
            chat = Chat.objects(Q(chat_id=body['chat']))
            if chat:
                print(chat[0].id)
                # users_in_peer = Peer.objects(Q(chat=Chat.objects(Q(chat_id=body['chat']))))
                return Response(str(chat[0]), mimetype="application/json", status=200)
                # print("=========================")
            else: 
                return Response("not found", mimetype="application/json", status=404)
            # chat=chat=chat_id

            # requested_chat = Chat(chat_id=body['chat'])
            # users_in_peer = User.objects.get(chat=requested_chat)
            # users_in_peer = Peer.objects(chat=requested_chat)
            # users_in_peer = users_in_peer.to_json()
            # return Response(users_in_peer, mimetype="application/json", status=200)
        else:
            return {"Error": "Missing Arguments chat"}, 400
