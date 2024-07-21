import { useAppStore } from '@/store/app-store';
import Bookmarks from './bookmarks';
import Breadcrumbs from './breadcrumbs';
import Header from './header';

export default function MainContent() {
  const { activeFolder, bookmarks } = useAppStore();
  const data = activeFolder ? activeFolder.children! : bookmarks;

  return (
    <>
      <Header />
      <main className="mt-4 dark:pintree-bg-gray-900 flex-grow">
        {false && (
          <div id="loading-spinner" className="flex justify-center items-center h-full">
            <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-6 w-6"></div>
          </div>
        )}
        <Breadcrumbs />
        <Bookmarks data={data} />
      </main>
    </>
  );
}
