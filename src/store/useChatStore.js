import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const SESSION_KEY = () => `chat_${Date.now()}`

export const useChatStore = create(
  persist(
    (set, get) => ({
      // Chat sessions
      sessions: [],
      activeSessionId: null,

      // UI state
      theme: 'dark',
      sidebarOpen: typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
      activeNav: 'about',
      modalProject: null,
      toasts: [],
      isTyping: false,
      showHome: true,

      // ── Session helpers ──────────────────────
      newSession: () => {
        const id = SESSION_KEY()
        const session = { id, messages: [], createdAt: Date.now(), title: 'New Chat' }
        set(s => ({
          sessions: [session, ...s.sessions].slice(0, 20),
          activeSessionId: id,
          showHome: true,
        }))
        return id
      },

      getActiveMessages: () => {
        const { sessions, activeSessionId } = get()
        return sessions.find(s => s.id === activeSessionId)?.messages || []
      },

      addMessage: (message) => {
        const { sessions, activeSessionId } = get()
        set({
          sessions: sessions.map(s =>
            s.id === activeSessionId
              ? {
                  ...s,
                  messages: [...s.messages, { ...message, id: Date.now() + Math.random() }],
                  title: s.messages.length === 0 ? message.text?.slice(0, 30) || 'Chat' : s.title,
                }
              : s
          ),
        })
      },

      deleteSession: (id) => {
        const { sessions, activeSessionId, newSession } = get()
        const filtered = sessions.filter(s => s.id !== id)
        set({ sessions: filtered })
        if (activeSessionId === id) {
          if (filtered.length > 0) set({ activeSessionId: filtered[0].id })
          else newSession()
        }
      },

      switchSession: (id) => set({ activeSessionId: id, showHome: false }),

      // ── Theme ──────────────────────
      toggleTheme: () => set(s => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),

      // ── Sidebar ──────────────────────
      toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (v) => set({ sidebarOpen: v }),

      // ── Nav ──────────────────────
      setActiveNav: (nav) => set({ activeNav: nav }),

      // ── Home ──────────────────────
      goHome: () => set({ showHome: true }),
      setShowHome: (v) => set({ showHome: v }),

      // ── Project modal ──────────────────────
      openModal: (project) => set({ modalProject: project }),
      closeModal: () => set({ modalProject: null }),

      // ── Toasts ──────────────────────
      addToast: (msg, type = 'info') => {
        const id = Date.now()
        set(s => ({ toasts: [...s.toasts, { id, msg, type }] }))
        setTimeout(() => set(s => ({ toasts: s.toasts.filter(t => t.id !== id) })), 3000)
      },

      setTyping: (v) => set({ isTyping: v }),
    }),
    {
      name: 'gugan-portfolio-store',
      partialize: (s) => ({ sessions: s.sessions, theme: s.theme }),
    }
  )
)
