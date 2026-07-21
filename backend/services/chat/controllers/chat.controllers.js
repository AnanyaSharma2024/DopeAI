import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// Create Conversation
export const createConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    console.log("userId:", userId);

    const conversation = await Conversation.create({
      userId,
    });

    return res.status(201).json(conversation);
  } catch (error) {
    return res.status(500).json({
      message: `Create Conversation Error: ${error.message}`,
    });
  }
};

// Get All Conversations
export const getConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    console.log("userId:", userId);

    const conversations = await Conversation.find({
      userId,
    }).sort({ updatedAt: -1 });

    return res.status(200).json(conversations);
  } catch (error) {
    return res.status(500).json({
      message: `Get Conversation Error: ${error.message}`,
    });
  }
};

// Save Message
export const saveMessage = async (req, res) => {
  try {
    const { conversationId, role, content } = req.body;

    const message = await Message.create({
      conversationId,
      role,
      content,
    });

    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({
      message: `Save Message Error: ${error.message}`,
    });
  }
};

// Get Messages of a Conversation
export const getMessage = async (req, res) => {
  try {
    const { conversationId } = req.body;

    const messages = await Message.find({
      conversationId,
    }).sort({ createdAt: 1 });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({
      message: `Get Message Error: ${error.message}`,
    });
  }
};

// Update Conversation
export const updateConversation = async (req, res) => {
  try {
    const { conversationId, title } = req.body;

    const conversation = await Conversation.findByIdAndUpdate(
      conversationId,
      {
        title,
      },
      {
        new: true,
      }
    );

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    return res.status(200).json(conversation);

  } catch (error) {
    return res.status(500).json({
      message: `Update Conversation Error: ${error.message}`,
    });
  }
};