from flask import Response, request
from flask_restful import Resource
from mongoengine.queryset.visitor import Q

class testApi(Resource):
    def get(self):
        return {'msg': 'Alive'}, 200
