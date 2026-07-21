import express from "express";
import { createConversation, getConversation, getMessage, saveMessage, updateConversation } from "../controllers/chat.controllers.js";

const router = express.Router();

router.get("/create-conversation", createConversation);
router.get("/get-conversation", getConversation);
router.post("/save-message", saveMessage);
router.post("/get-message", getMessage);
router.post("/update-conversation", updateConversation);

export default router;