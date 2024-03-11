

- POST `sign-up`: Create a twitter user

```json
{
  	"username": "desired name",
  	"avatar": "url of an image for identification in chat"
}
example:
{
  	"username": "boby",
  	"avatar": "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"
}

```

## RULES

A user cannot be created if some of the entities are not filled in correctly.

All fields proposed above are mandatory. Failure to comply returns 401.
##


- POST `tweets`: Creating the tweet to post in the chat

```json
{
	"username": "Username that has been created",
	"tweet": "Message you want to send"
}

example:
{
  "username": "boby",
  "tweet": "Quero logo um emprego, sei que Deus vai me abençoar!"
}
```
## RULES

Whenever a new tweet is created, these fields must contain this data:

```bash
"username": which must be an existing user,
"tweet": must contain a valid message
```
Every time a new tweet is made, a check is made to see if the user exists, if not, it returns 401.

All fields proposed above are mandatory. Failure to comply returns 401.
##

- GET `tweets`: Collecting tweet posts.

```json
returns:
[
	{
    "username": "boby",
    "avatar": "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg",
    "tweet": "Quero logo um emprego, sei que Deus vai me abençoar!"
   	},
	{...}
]
```


GET `tweets/:username`: Get a game by its respective id.
```bash
Get tweets from a specific user.
Remember in tweets/:username, after the slash '/' you have to put the name of the desired user
example: `/tweets/boby`
````

## RULES

 The id required for the route is mandatory, an id that does not exist will return an empty array.

##

- POST `tweets?page=number`: pagination of posts

```bash
Remember that this fight is not mandatory, in the route tweets?page=number, after the tweets you have to put '?page=number' where the number is just an example where it means the number of the page that the user who view, by default all pages only consist of 15 posts.
example: 'tweets?page=2'
````

## RULES

If no number is sent, the 15 last posts are sent by default.

##





