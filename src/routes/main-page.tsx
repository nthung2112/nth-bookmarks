import Footer from '@/components/footer';
import MainContent from '@/components/main-content';
import MobileMenu from '@/components/mobile-menu';
import Sidebar from '@/components/sidebar';

export default function MainPage() {
  return (
    <>
      <MobileMenu />
      <Sidebar />

      <div className="lg:pl-60 dark:pintree-bg-gray-900 flex flex-col min-h-screen">
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
