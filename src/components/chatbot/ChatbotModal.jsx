import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdSend, MdRefresh } from "react-icons/md";
import { FaRobot, FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const QUICK_PROMPTS = [
  "Tell me about Sathish's experience",
  "What are his main skills?",
  "Tell me about his projects",
  "What technologies does he use?",
  "How can I contact Sathish?",
];

const INITIAL_MESSAGE = {
  id: "welcome-1",
  role: "assistant",
  content:
    "👋 Hi! I'm Sathish's AI Portfolio Assistant. Ask me anything about his professional experience, projects, skills, or education!",
};

export default function ChatbotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input when opened
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages, isLoading]);

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorMsg(null);
  };

  const handleSendMessage = async (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : inputValue;
    if (!query || !query.trim() || isLoading) return;

    const trimmed = query.trim();
    setInputValue("");
    setErrorMsg(null);

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    // Update state with user message
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Build minimal conversation history to send (excluding initial welcome msg)
      const historyPayload = updatedMessages
        .filter((m) => m.id !== "welcome-1")
        .slice(-6)
        .map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          content: m.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload.slice(0, -1), // History prior to current message
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to receive response.");
      }

      const botMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I don't have that information in Sathish's portfolio.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex flex-col w-full sm:w-[400px] h-full sm:h-[580px] max-h-[100vh] sm:max-h-[85vh] bg-white sm:rounded-2xl shadow-2xl border border-purple-100 overflow-hidden font-sans animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <BsStars className="text-xl text-yellow-300 animate-pulse" />
          </div>
          <div>
            <h2 className="font-bold text-base leading-tight">Sathish AI Assistant</h2>
            <p className="text-xs text-purple-100 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
              Online • Portfolio Guide
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={handleClearChat}
            title="Clear conversation"
            className="p-1.5 hover:bg-white/20 rounded-lg transition text-white/90 hover:text-white"
          >
            <MdRefresh className="text-xl" />
          </button>
          <button
            onClick={onClose}
            title="Close chat"
            className="p-1.5 hover:bg-white/20 rounded-lg transition text-white/90 hover:text-white"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 text-sm">
        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-sm ${
                  isUser
                    ? "bg-purple-600 text-white"
                    : "bg-gradient-to-tr from-purple-500 to-pink-500 text-white"
                }`}
              >
                {isUser ? <FaUser /> : <FaRobot />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-[13.5px] leading-relaxed whitespace-pre-wrap break-words ${
                  isUser
                    ? "bg-purple-600 text-white rounded-tr-none"
                    : "bg-white text-gray-800 border border-purple-100/60 rounded-tl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}

        {/* Loading Bubble */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center text-xs">
              <FaRobot />
            </div>
            <div className="bg-white border border-purple-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}

        {/* Error Notice */}
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        {/* Suggested Quick Questions (Shown if only welcome message) */}
        {messages.length === 1 && !isLoading && (
          <div className="pt-2">
            <p className="text-xs text-gray-500 font-medium mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 hover:border-purple-400 rounded-full px-3 py-1.5 transition text-left shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-3 bg-white border-t border-purple-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about skills, projects, experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={500}
            disabled={isLoading}
            className="flex-1 py-2.5 px-3.5 text-sm bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white text-gray-800 disabled:opacity-60 transition"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="p-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 flex-shrink-0"
          >
            <MdSend className="text-lg" />
          </button>
        </form>
        <div className="flex justify-between items-center mt-1 px-1 text-[10px] text-gray-400">
          <span>Answers strictly portfolio-related info</span>
          <span>{inputValue.length}/500</span>
        </div>
      </div>
    </div>
  );
}
