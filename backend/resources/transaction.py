from flask import Response, request
# from database.models import Post
from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from utils.user import get_user_id
from mongoengine.queryset.visitor import Q

class TransactionApi(Resource):
    # decorators = [jwt_required()]

    def post(self,id):
        return {'msg': 'transaction number {}'.format(id)}, 200
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
        return {'msg': 'transactions'}, 200
        # page = request.args.get("page")
        # limit = request.args.get("limit")
        # tags = request.args.getlist("tags")
        # query = Q(active=True)
        # for t in tags:
        #     query = query & Q(tags=t)
        # # print(query)
        # if page and limit:
        #     page = (int) (page)
        #     limit = (int) (limit)
        #     start_index = (page - 1) * limit
        #     end_index = page * limit
        # else:
        #     start_index = 0
        #     end_index = 20
        # posts = get_posts(Post.objects(query)[start_index:end_index])
        # return {
        #     "posts" : posts,
        #     "hasNext" : len(Post.objects(query)[end_index:end_index+1]) > 0
        # }, 200
    