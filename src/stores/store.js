const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
  
const important = {
    mongo_uri: process.env.MONGO_URI,
    jwtAccess: {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: "15m",
    },
    jwtRefresh: {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: "7d",
    },
    hashing: {
        saltRounds: 10,
    },
};

const logo = "https://media.discordapp.net/attachments/916361716965707836/1277165337825251338/OpenChat.png?ex=66cc2c69&is=66cadae9&hm=7e62f9d41dbfb54c7857ee8826c900759630569fb5953adca4762a9480b90712&";

const apiUrl = "http://localhost:4000";

const JWT_ACCESS_TOKEN = important.jwtAccess.secret;
const JWT_REFRESH_TOKEN = important.jwtRefresh.secret;

const signAccessToken = (payload, expiresIn = "15m") => {
    return jwt.sign(payload, JWT_ACCESS_TOKEN, { expiresIn });
}

const signRefreshToken = (payload, expiresIn = "7d") => {
    return jwt.sign(payload, JWT_REFRESH_TOKEN, { expiresIn });
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, JWT_ACCESS_TOKEN);
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, JWT_REFRESH_TOKEN);
}

const connectDB = async () => {
    try {
        await mongoose.connect(important.mongo_uri);
        console.log("MongoDb is connected");
    } catch (error) {
        console.error(error);
    }
}

module.exports = { important, logo, apiUrl, JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN, signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken, connectDB };