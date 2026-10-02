import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import ChatbotModal from "./ChatbotModal";

export default function ChatbotTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Button positioned cleanly above the WhatsApp button */}
      <div className="fixed bottom-20 right-4 md:right-8 z-50 flex items-center group">
        {/* Tooltip hint on hover (hidden on mobile) */}
        {!isOpen && (
          <span className="hidden md:inline-block mr-3 px-3 py-1 text-xs font-semibold text-purple-700 bg-white shadow-lg border border-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask AI Assistant
          </span>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle AI Portfolio Chatbot"
          className="relative p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center border-2 border-white"
        >
          {isOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <>
              <FaRobot className="text-2xl" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400 text-[9px] font-bold text-purple-900 items-center justify-center">
                  <BsStars className="text-[10px]" />
                </span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chatbot Modal Dialog */}
      <ChatbotModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
