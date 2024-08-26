import Chat from "$lib/modals/chat";
import Message from "$lib/modals/message";
import User from "$lib/modals/user";
const { authMiddleware } = require("../middleware");

const { Router } = require("express");
const { body } = require('express-validator');

const router = Router();

const { getUserChats, startChat, sendMessage, editMessage, addReaction, deleteMessage } = require('../Controllers/chatController.js');

// chat id 665c52fa0e66697107164be2
// user id 665c52570e66697107164bda

router.get(
  "/chat/:userId", 
//   authMiddleware,
  getUserChats
);

router.post(
  "/start-chat",
  [
    body("userid")
    .notEmpty().withMessage("User was not found")
    .custom(async (userid: any) => {
      const userGet = await User.findOne({
        _id: userid
      });
      if (!userGet) {
        throw new Error("User with provided id was not found");
      }
    }),
  ],
  authMiddleware, 
  startChat
);

router.post(
  "/send-message",
  [
    body("chatId")
    .trim().escape()
    .notEmpty().withMessage("ChatId was not provided")
    .custom(async (chatId: any) => {
      const chatGet = await Chat.findOne({
        _id: chatId
      });
      if (!chatGet) {
        throw new Error("Chat with provided id was not found");
      }
    }),
    body("message")
    .trim().escape()
    .notEmpty().withMessage("You can\'t send empty message")
  ],
  authMiddleware,
  sendMessage
);

router.put(
  "/add-reaction",
  [
    body("messageId")
    .trim().escape()
    .notEmpty().withMessage("MessageId was not provided")
    .custom(async (messageId: any) => {
        const messageGet = await Message.findOne({
            _id: messageId
        });
        if (!messageGet) {
            throw new Error("Message with provided id was not found");
        }
    }),
    body("reaction")
    .trim().escape()
    .notEmpty().withMessage("Cannot add empty reaction"),
  ],
  authMiddleware,
  addReaction
);

router.put(
  "/edit-message",
  [
    body("messageId")
    .trim().escape()
    .notEmpty().withMessage("MessageId was not provided")
    .custom(async (messageId: any) => {
      const messageGet = await Message.findOne({
        _id: messageId
      });
      if (!messageGet) {
        throw new Error("Message with provided id was not found")
      }
    }),
    body("message")
    .trim().escape(),
  ],
  authMiddleware,
  editMessage
);

router.delete(
  "/delete-message/:messageId",
  authMiddleware,
  deleteMessage
);

module.exports = router;