config_map = {
    'routing_prefix': '/api/v1',
    'debug_mode': True,
    'server_port': 5000,
    'mongodb_host': 'mongodb://localhost/telewise',
    'mongodb_name': 'telewise',
    'api_audience': 'http://localhost:5000/api/v1/terms',
    'algorithms': ["RS256"],
    'jwt_secret_key': 'super_secret_key_for_jwt',
    'password_salt': 't3l3VViZ3_SaLt',
    'tags_location' : "./static/tags/",
    'github_accesstoken': "ghp_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
}
