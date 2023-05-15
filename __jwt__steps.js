// -----jwt: secure your api

// ------CREATE TOKEN------
// 
// 1.after user login send user basic info to create token
// 2. in the server side: install npm i jsonwebtoken
// 3.import jsonwebtoken
// 4.jwt.sign(payload, secret, {expires})
// 5.return token to the client side
// 6. after recicing the token store it either  httponly cookies or localstorage(second best solution)
// 7.use a general space onauthstatechange > authprovider.



// ---------SEND TOKEN TO SERVER-----
// 1.for sensitive api call( send authorization headers {authorization: 'Bearer token'})
// 



// ------VERIFY-------

// 1.create a function called verifyJWT(middleware)
// 2.this function will have 3 params: req, res, next
// 3.first check weather the authorization headers axists
// 4. if not send 401
// 5.get the token out of the authorization header
// 6.call jwt.verify(token, secret, (err, decoded))
// 7.if err => send 401
// 8. set decoded to the req object so that we can retrieve it later
// 9. call the next() to go to the next function.



// 
// 1.check weather token has the email that matches with the req email.
// 

