


/**
 * Module dependencies.
 */

var express = require('express')
  , https = require('https')
  , app = express();

var server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

//server.listen(3000);
server.listen(3001);


// Socket.IO
app.get('/social_drawing', function (req, res) {
  res.sendfile(__dirname + '/social_drawing/social_drawing.html');
});



// @@@ var io = require('socket.io').listen(app);
var OBJECTMAX = 900;
var objects = new Array(OBJECTMAX);
var sockets = {};
var socket_num = 0;
var fade_rate = {index: 2, fade: 1};



function broadcast(method, message) {
  for (var n in sockets) {
    sockets[n].emit(method, message);
  }
}

io
.of('/social_drawing')
.on('connection', function(socket) {
  sockets[socket.id] = socket;
  socket_num++;
  broadcast('change_con_num_s2c', socket_num);
  socket.emit('fade_rq_s2c', fade_rate);
  socket.emit('draw_init_s2c', objects);

  socket.on('draw_rq_c2s', function(data) {
    objects.shift();
    objects.push(data);
    broadcast('draw_rq_s2c', data);
  });

  socket.on('fade_rq_c2s', function(data) {
    fade_rate = data;
    broadcast('fade_rq_s2c', fade_rate);
  });

  socket.on('erase_rq_c2s', function(data) {
    objects = new Array(OBJECTMAX);
    broadcast('erase_rq_s2c', objects);
  });


  socket.on('disconnect', function() {
    delete sockets[socket.id];
    socket_num--;
    broadcast('change_con_num_s2c', socket_num);
  });
});



//@@@ console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


