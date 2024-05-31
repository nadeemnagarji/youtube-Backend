Key differences between the session based and token based auth approaches include:

Statelessness: Token-based authentication is stateless, meaning the server does not need to store any session data. Session-based authentication requires the server to maintain session state, either in memory or a persistent data store.

Scalability: Token-based authentication can be more scalable because it eliminates the need for server-side session management. Session-based authentication may require additional server resources to handle session state, especially in distributed or clustered environments.

Security: Both approaches can be secure when implemented correctly. However, token-based authentication offers additional security features such as expiration times, claims-based authorization, and the ability to revoke tokens.

Cross-Origin Resource Sharing (CORS): Token-based authentication is often preferred for APIs that need to support cross-origin requests because tokens can be included in the request header. Session-based authentication may require additional configuration to handle cross-origin requests.


KEY DIFFERENCE BETWEEN SESSION BASED AUTH AND TOKEN BASED AUTH

In a traditional session-based authentication system, the server maintains session state on the server side, typically in memory or in a database. When a user logs in, the server creates a session and associates it with the user's session ID, which is then stored as a session cookie in the client's browser. The session ID is used to identify and retrieve the session data stored on the server for each subsequent request.

In contrast, in a token-based authentication system, session state is decentralized, meaning the server does not need to store session data. Instead, tokens (such as access tokens and refresh tokens) are issued to the client upon authentication. The tokens contain all the necessary information to authenticate and authorize the client's requests, eliminating the need for server-side session management.

While both session-based authentication and token-based authentication involve storing some form of authentication data in a database (either session data or tokens), the key difference lies in how session state is managed:

Session-Based Authentication:
Session state is stored on the server side, requiring the server to manage session data for each active session.
Session data is typically stored in memory or in a database and associated with a session ID.
The server needs to perform session management tasks, such as creating, updating, and deleting sessions, as well as handling session expiration and cleanup.
Token-Based Authentication:
Session state is decentralized, as tokens contain all the necessary authentication information.
Tokens are issued to the client upon authentication and are used to authenticate and authorize requests.
The server does not need to maintain session state, as tokens are self-contained and can be validated independently.
Refresh tokens, if used, may be stored in a database for token management purposes, such as revocation and rotation, but they do not require server-side session management.
In summary, while both session-based authentication and token-based authentication involve storing authentication data in a database, token-based authentication eliminates the need for server-side session management by decentralizing session state and using self-contained tokens for authentication and authorization. Refresh tokens, if used, may be stored in a database for token management purposes but do not require the same level of session management as traditional session-based authentication systems.


ADVANTAGES OF USING TOKENS 

1} No memory is used  to maintain session state
2}can be easily used in a serverless architecture
3} long term authentications


DISADVANTAGES 

1} Difficult to manage the users and invalidate the users 

2} little less secure than 