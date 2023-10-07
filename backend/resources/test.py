from flask import Response, request
from flask_restful import Resource
from mongoengine.queryset.visitor import Q
from database.models import R, B, Chat, Transaction, Payment, Peer, User, Balance

class testApi(Resource):
    def get(self):
        # r = R(name = "Hossein")
        # r.save()
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
        Chat.objects().delete()
        User.objects().delete()
        Transaction.objects().delete()
        Payment.objects().delete()
        Balance.objects().delete()
        Peer.objects().delete()
        R.objects().delete()
        B.objects().delete()
        print("Cleared")
        # return {'msg': "B:{}, R:{}".format(len(B.objects()), len(R.objects()))}, 200
        return {'msg': "B:, R:"}, 200
        # return {'msg': "Done"}, 200



