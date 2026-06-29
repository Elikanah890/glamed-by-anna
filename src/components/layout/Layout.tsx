import { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop';

export function Layout() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const handleCloseAnnouncement = useCallback(() => {
    setAnnouncementVisible(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F2] dark:bg-[#121212] transition-colors duration-300">
      <ScrollProgress />

      {/* Fixed header stack — announcement sits above navbar, both sticky as one unit */}
      <div className="sticky top-0 z-50">
        {announcementVisible && (
          <AnnouncementBar onClose={handleCloseAnnouncement} />
        )}
        <Navbar />
      </div>

      {/* Main content — no extra spacer needed since sticky header is in flow */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
