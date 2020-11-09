const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
};

const generateLocationMessage = (username, location) => {
    return {
        username,
        text: location,
        createdAt: new Date().getTime()
    }
};

module.exports = {generateMessage, generateLocationMessage}