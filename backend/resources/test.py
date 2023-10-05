from flask import Response, request
from flask_restful import Resource
from mongoengine.queryset.visitor import Q
from database.models import R, B, Chat, Transaction, Payment, Peer, User

class testApi(Resource):
    def get(self):
        r = R(name = "Hossein")
        r.save()
        # b = B(rfe=r)
        # b.save()
        # r = R.objects.filter(name="Ali")
        # print(len(r))
        # for item in r:
        #     print(type(item))
        # b = B.objects(rfe=r)
        # for item in b:
        #     print(type(item.rfe.name))
        # R.objects().delete()
        # Bransaction.objects().delete()

        # return {'msg': "B:{}, R:{}".format(len(B.objects()), len(R.objects()))}, 200
        return {'msg': "B:{}, R:{}".format(R.objects.first().name, len(Transaction.objects()))}, 200
        # return {'msg': "Done"}, 200
