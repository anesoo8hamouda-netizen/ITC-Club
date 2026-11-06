import { useState, useRef, useEffect } from "react";
import "./Assistant.css";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! 👋 Welcome to ITC Club. I'm your AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // Send message to the backend
  async function handleSendMessage(e) {
    e.preventDefault();

    const userMessage = input.trim();

    if (!userMessage || isLoading) return;

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((message) => 
              message.role === "user" || message.role === "assistant"
            )
            .map((message) => ({
              role: message.role,
              content: message.content,
            })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      console.error("AI Assistant error:", err);

      setError(
        "Sorry, I couldn't connect to the AI assistant. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="assistant-container">

      {/* Floating AI button */}
      <button
        className="ai-toggle"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? "✕ Close" : "✦ Ask ITC AI"}
      </button>

      {/* Chat window */}
      {isOpen && (
  <div
    style={{
      position: "fixed",
      top: "auto",
      left: "auto",
      right: "25px",
      bottom: "90px",
      transform: "none",
      width: "min(380px, calc(100vw - 30px))",
      height: "450px",
      maxHeight: "80vh",
      backgroundColor: "#111",
      color: "white",
      border: "2px solid #e32636",
      borderRadius: "15px",
      zIndex: 99999999,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
    }}
  >
    <div
      style={{
        padding: "15px",
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "#e32636", margin: 0 }}>
        ITC AI Assistant
      </h3>

      <button
        onClick={() => setIsOpen(false)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </div>

    <div
      style={{
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            padding: "12px",
            borderRadius: "12px",
            maxWidth: "85%",
            alignSelf:
              message.role === "user" ? "flex-end" : "flex-start",
            background:
              message.role === "user" ? "#e32636" : "#292929",
            overflowWrap: "anywhere",
          }}
        >
          {message.content}
        </div>
      ))}

      {isLoading && <p>ITC AI is thinking...</p>}
      {error && <p style={{ color: "#ff7777" }}>{error}</p>}

      <div ref={messagesEndRef} />
    </div>

    <form
      onSubmit={handleSendMessage}
      style={{
        display: "flex",
        gap: "8px",
        padding: "12px",
        background: "#222",
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        disabled={isLoading}
        style={{
          flex: 1,
          minWidth: 0,
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #444",
          background: "#333",
          color: "white",
        }}
      />

      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        style={{
          background: "#e32636",
          color: "white",
          border: "none",
          borderRadius: "20px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        ➤
      </button>
    </form>
  </div>
)}
    </div>
  );
}