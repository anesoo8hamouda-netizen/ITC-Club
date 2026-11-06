
const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `
You are the official AI assistant of ITC Club
at the University of Blida 1, Algeria.

Your responsibilities:
- Answer questions about ITC Club.
- Explain club activities and events.
- Help visitors understand how to join.
- Answer technology and programming questions.
- Be friendly, helpful and professional.

Languages:
- Support Arabic.
- Support Algerian Darija.
- Support French.
- Support English.
- Always respond in the same language as the user.

Rules:
- Keep answers clear and reasonably short.
- Never invent events, dates or registration details.
- If you don't know something, say so honestly.
- For private club information, recommend contacting
the club administrators.
`;

router.post("/", async (req, res) => {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return res.status(503).json({
                success: false,
                message: "AI assistant is not configured."
            });
        }

        const { messages } = req.body;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please send a message."
            });
        }

        const conversation = messages
        .slice(-12)
        .filter(
            (msg) =>
            ["user", "assistant"].includes(msg.role) &&
            typeof msg.content === "string" &&
            msg.content.trim().length > 0 &&
            msg.content.length <= 2000
        )
        .map((msg) => ({
            role: msg.role,
            content: msg.content.trim()
        }));

        if (!conversation.length ||
            !conversation.some((msg) => msg.role === "user")) {
            return res.status(400).json({
                success: false,
                message: "Invalid conversation."
            });
            }

            const completion = await client.chat.completions.create({
                model: process.env.OPENAI_MODEL || "gpt-4o-mini",
                messages: [
                    { role: "system", content: systemPrompt },
                    ...conversation
                ],
                max_tokens: 500
            });

            const reply = completion.choices[0]?.message?.content;

            return res.json({
                success: true,
                reply: reply || "Sorry, I couldn't generate an answer."
            });

    } catch (error) {
        console.error("Chat error:", error.message);

        return res.status(500).json({
            success: false,
            message: "The AI assistant is temporarily unavailable."
        });
    }
});

module.exports = router;
