# Authentication and Authorization

The API uses a token based approach for authentication and authorization. Still, from our experience, these concerns are
implemented differently in different projects. Some may use Cookie-based session management, others a Single-Sign-On
solutions and again others something completely different. That's why middle only provides one `login` mutation in order
to authenticate a user, which returns the active customer along with an optional access token and an optional refresh
token. The mutation takes either a username/password combination or a refresh token as argument.

The tokens should be stored in the session handling part of your storefront application and can be sent via a HTTP
Header back to middle.
From there it can be extracted and passed to resolvers by extending the context.

E.g. when using `@inniti/middle-server`:

```js
const MyConnector = {
  getTypeDefs() {
    return [
      // ...
    ]

  },
  getResolvers() {
    return [
      // ...
    ];
  },
  extendContext(context) {
    return {
      // This will most probabily be the access token returned from the login mutation
      token: context.req.headers['authorization']
    };
  },
};
```
