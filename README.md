social-drawing (old)
====================

*realtime shared canvas for multi web clients with websocket*


Overview
--------
* This source code is an old rapid prototyping code:  
    Node.js(backend) + JavaScript(frontend) + Socket.io(WebSocket)

* I'll port to Haskell backend for my exercise:  
    **Haskell**(backend) + JavaScript(frontend) + WebSocket(or Socket.io)

* After porting, I'll remove this repo.


How to use
----------
1. get this source and expand to your working directory

2. install node.js libraries:  
  ~~~
  $ npm install
  ~~~

3. modify IP address in the source for YOUR_SERVER_IP:  
  [social_drawing/social_drawing.html#L166][1]

4. start your server:  
  ~~~
  $ node app.js
  ~~~

5. access from web browsers to:  
  `http://YOUR_SERVER_IP:3001/social_drawing`


Example screen image
--------------------
![screen image][2]


ToDo list
---------
* port to Haskell backend

* update websocket(socket.io) protocol for recent API

* refactor dirty code

* implement locally overlapped drawing for slow connection

* implement independent rooms


[1]: https://github.com/takenobu-hs/social-drawing-old-js/blob/master/social_drawing/social_drawing.html#L166
[2]: http://takenobu-hs.github.io/downloads/images/social_drawing.png

