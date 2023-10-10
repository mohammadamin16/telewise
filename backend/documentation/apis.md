Base Url is defined as:
`{Domain:port}/api/v1/`
all sub-routes will be joined after the structure above.

i.e:
`user/`
will be: 
`{Domain:port}/api/v1/user/`


## user

### `Post` method
Route: `user/`

Any of the participants in chats need to register in each chat that the want to use `Telewise`. 
Users in groups can register, in order to be a participant in `Telewise`.
their `name`, `user id` and `chat instance` will be sent sent to server in order to register in chat.

### `Get` method
Route: `/user?userId=<user_id>&chat=<chat_id>`

User will request the names & user ids of the participants of `Telewise`

## transaction
### `Get` method
Route: `/transaction?userId=<user_id>&chat=<chat_id>`

Getting details of all transactions in a chat.

### `Post` method
Route: `/transaction`

Adds a new transaction in a chat.

## balance
### `Get` method
Route: `/balance?userId=<user_id>&chat=<chat_id>`

Get balances of a user in chat. How much a user must pay others in order to settle-up.

## pay
### `Post` method
Route: `/pay`

One user pays another user in a chat.

## test

### `Get` method
Route: `/`
By now it cleares the DB. But it must be used in order to check if the server is working properly.



You can checkout [Postman file](https://github.com/mohammadamin16/telewise/tree/main/backend/Telewise%20API%20structure.postman_collection.json) in order to see URLs & API structures with examples.

