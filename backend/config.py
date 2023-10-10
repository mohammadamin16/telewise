config_map = {
    'routing_prefix': '/api/v1',
    'debug_mode': False,
    'server_port': 5001,
    'mongodb_host': 'mongodb://localhost:27018/telewise',
#    'mongodb_port': 27018,
    'mongodb_name': 'telewise',
    'api_audience': 'http://localhost:5000/api/v1/terms',
    'algorithms': ["RS256"],
    'jwt_secret_key': 'super_secret_key_for_jwt',
}
