# Simple Session Server

Node.js Server App that shows how to use sessions

Before you can use it, you need to create a config.js file on the root of the project setting up the next variables:
```
exports.DATABASE_URL = 'mongodb://user:password@endpoint:port/collection';
exports.PORT = process.env.PORT || 8080;
exports.SECRET = 'a_good_and_secure_string';
```

It uses just 3 endpoints:

- A **POST** call that serves as _Login_
- A **DELETE** call that serves as _Logout_
- A **GET** call who behave as an endpoint that shows protected content
