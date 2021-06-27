const messages = [
    "Ana",
    "Manuel",
    "Laura",
    "Yesica",
    "Nicolai",
    "Maria",
    "Karolina",
    "Daniel",
    "Santos"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };