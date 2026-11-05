
import { useState } from "react";
import "./Assistant.css";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CHAT BUTTON */}
      <button
        className="ai-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ✦ Ask ITC AI
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="ai-chat">

          <div className="ai-header">
            <div>
              <h3>ITC AI Assistant</h3>
              <p>Your club assistant</p>
            </div>

            <button
              className="ai-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="ai-messages">
            <div className="ai-message bot-message">
              Hello! 👋 Welcome to ITC Club.
            </div>

            <div className="ai-message bot-message">
              🚧 This feature is not available yet.LoL
            </div>
          </div>

        </div>
      )}
    </>
  );
}
