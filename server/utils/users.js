const connectedUsers = [];

const addUser = ({id, username, room}) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();
    if(!username || room) {
        return {
            error: "Username and room are required"
        }
    }
    const existingUser = connectedUsers.find(user => user.room === room);
    if(existingUser) {
        return {
            error: 'This username is already taken'
        }
    }
    const user = {id, username, room};
    connectedUsers.push(user);
    return {user};
};

const removeUser = id => {
    const index = connectedUsers.findIndex(user => user.id === id);
    if(index !== -1) {
        return connectedUsers.splice(index, 1)[0]
    }
};

const getUser = id => {
    return connectedUsers.find(user => user.id === id);
};

const getChatUsers = room => {
    return connectedUsers.filter(user => user.room === room);
}

module.exports = {addUser, removeUser, getUser, getChatUsers}