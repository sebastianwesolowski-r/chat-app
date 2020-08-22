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
        url: location,
        createdAt: `${new Date().getHours()} : ${new Date().getMinutes()}`
    }
};

module.exports = {generateMessage, generateLocationMessage}