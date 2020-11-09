const http = require('http');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const {addUser, removeUser, getUser, getChatUsers} = require('./utils/users');
const {generateMessage, generateLocationMessage} = require('./utils/messages');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

io.on('connection', socket => {
    console.log('new socket has connected');

    socket.on('join', ({username, room}, cb) => {
        const {error, user} = addUser({id: socket.id, username, room});

        if(error) {
            return cb(error);
        }

        socket.join(user.room);
        socket.emit('message', generateMessage('server', 'Welcome!'));
        socket.broadcast.to(user.room).emit('message', generateMessage('server', `${user.username} has joined the chatroom`));
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getChatUsers(user.room)
        });
        cb();
    });
    socket.on('sendMessage', (message, cb) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', generateMessage(user.username, message));
        cb();
    });
    socket.on('sendLocation', (location, cb) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${location.latitude},${location.longitude}`));
        cb();
    })
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user) {
            io.to(user.room).emit('message', generateMessage('server', `${user.username} has left the chatroom`));
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getChatUsers(user.room)
            });
        }
    })
})

server.listen(process.env.PORT || 3001, () => console.log('Welcome in the chat!'));