from flask import Response, request
# from database.models import Post
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class PayApi(Resource):
    # decorators = [jwt_required()]

    def post(self):
        return {'msg': 'User payed'}, 200
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
