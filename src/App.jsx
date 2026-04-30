import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';
import ThreeScene from './components/ThreeScene';
import ProjectModal from './components/ProjectModal';
import ToastContainer from './components/ToastContainer';
import Topbar from './components/Topbar';
import { useChatStore } from './store/useChatStore';

export default function App() {
  const { theme, sidebarOpen, toggleSidebar } = useChatStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSend = (text) => {
    if (window.__portfolioSend) {
      window.__portfolioSend(text);
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden bg-base text-primary relative ${theme === 'dark' ? 'dark' : ''}`}>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeScene />
      </div>
      
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" className="progress-bar"></div>

      {/* Desktop Sidebar Container */}
      <div className={`hidden md:flex z-20 h-full transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-[260px]' : 'w-0'}`}>
        <AnimatePresence>
          {sidebarOpen && <Sidebar onSend={handleSend} />}
        </AnimatePresence>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={toggleSidebar} />
            <div className="fixed inset-y-0 left-0 z-[70]">
              <Sidebar onSend={handleSend} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col z-10 relative h-full max-w-full overflow-hidden">
        {/* Mobile/Top Navbar */}
        <Topbar onSend={handleSend} />

        <ChatWindow onOpenModal={(project) => useChatStore.getState().openModal(project)} />
        <InputArea onSend={handleSend} />
      </div>

      {/* Modals & Toasts */}
      <ProjectModal />
      <ToastContainer />
    </div>
  );
}
