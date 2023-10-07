from .transaction import TransactionApi
from .user import UserApi
from .pay import PayApi
from .balance import BalanceApi
from .test import testApi

def initialize_routes(api, routing_prefix):
    api.add_resource(TransactionApi, routing_prefix + '/transaction')
    api.add_resource(PayApi, routing_prefix + '/pay')
    api.add_resource(UserApi, routing_prefix + '/user')
    api.add_resource(BalanceApi, routing_prefix + '/balance')
    api.add_resource(testApi, routing_prefix + '/')
