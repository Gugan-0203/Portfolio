import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import InputArea from './components/InputArea';
import ThreeScene from './components/ThreeScene';
import ProjectModal from './components/ProjectModal';
import ToastContainer from './components/ToastContainer';
import Topbar from './components/Topbar';
import SplashScreen from './components/SplashScreen';
import { useChatStore } from './store/useChatStore';

export default function App() {
  const { theme, sidebarOpen, toggleSidebar } = useChatStore();
  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handle initial sidebar state on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      useChatStore.getState().setSidebarOpen(false);
    }
  }, []);

  const handleSend = (text) => {
    if (window.__portfolioSend) {
      window.__portfolioSend(text);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className={`flex h-screen overflow-hidden bg-base text-primary relative ${theme === 'dark' ? 'dark' : ''}`}>
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ThreeScene />
        </div>
        
        {/* Scroll Progress Bar */}
        <div id="scroll-progress" className="progress-bar"></div>

        {/* Desktop Sidebar Container */}
        <div className={`hidden md:flex z-20 h-full transition-all duration-300 ease-in-out overflow-hidden ${sidebarOpen ? 'w-[260px]' : 'w-0'}`}>
          <AnimatePresence mode="wait">
            {sidebarOpen && <Sidebar onSend={handleSend} />}
          </AnimatePresence>
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <div className="md:hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" 
                onClick={toggleSidebar} 
              />
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 z-[70] w-[260px]"
              >
                <Sidebar onSend={handleSend} />
              </motion.div>
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
    </>
  );
}
