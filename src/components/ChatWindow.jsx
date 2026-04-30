import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useChatStore } from '../store/useChatStore'
import { routeQuery } from '../utils/router'
import MessageBubble, { TypingIndicator } from './MessageBubble'
import WelcomeScreen from './WelcomeScreen'

export default function ChatWindow({ onOpenModal }) {
  const {
    sessions, activeSessionId, addMessage,
    isTyping, setTyping, showHome, setShowHome,
    newSession
  } = useChatStore()

  const bottomRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const winRef = useRef(null)

  const messages = sessions.find(s => s.id === activeSessionId)?.messages || []

  const lastMessageRef = useRef(null)

  const scrollToLatest = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => { scrollToLatest() }, [messages, isTyping])

  const handleScroll = () => {
    if (winRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = winRef.current
      setShowScrollTop(scrollTop > 300)

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100
      const progressBar = document.getElementById('scroll-progress')
      if (progressBar) progressBar.style.width = `${scrollPercent}%`
    }
  }

  const sendMessage = (queryText) => {
    const text = typeof queryText === 'string' ? queryText : queryText
    if (!text || isTyping) return

    // Ensure a session exists
    if (!activeSessionId) {
      newSession()
    }

    // Leave home screen as soon as a message is sent
    setShowHome(false)

    // Add user message
    addMessage({ role: 'user', text })

    // Simulate typing delay
    setTyping(true)
    const delay = 500 + Math.random() * 700
    setTimeout(() => {
      const content = routeQuery(text)
      addMessage({ role: 'assistant', content })
      setTyping(false)
    }, delay)
  }

  // Expose sendMessage to parent via window (simple approach)
  useEffect(() => {
    window.__portfolioSend = sendMessage
  }, [isTyping, activeSessionId, showHome])

  // Show welcome/home whenever showHome is true OR messages are empty
  const displayHome = showHome || messages.length === 0

  return (
    <div
      className="flex-1 overflow-y-auto relative scroll-smooth glass-chat"
      ref={winRef}
      onScroll={handleScroll}
    >
      <AnimatePresence mode="wait">
        {displayHome ? (
          <WelcomeScreen key="welcome" onSend={sendMessage} />
        ) : (
          <div key="messages" className="py-4 pb-6">
            {messages.map((msg, index) => (
              <div 
                key={msg.id} 
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <MessageBubble
                  message={msg}
                  onSend={sendMessage}
                  onOpenModal={onOpenModal}
                />
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        )}
      </AnimatePresence>

      {showScrollTop && (
        <button
          className="fixed bottom-[100px] right-6 w-9 h-9 rounded-full bg-card-light dark:bg-card border border-black/[0.09] dark:border-white/[0.08] text-ink-l-dim dark:text-ink-dim flex items-center justify-center z-10 transition-all hover:bg-hover-light dark:hover:bg-hover hover:text-ink-l dark:hover:text-ink"
          onClick={scrollToLatest}
          title="Scroll to bottom"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}
