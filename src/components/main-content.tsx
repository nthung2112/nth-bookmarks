import { useAppStore } from '@/store/app-store';
import Bookmarks from './bookmarks';
import Breadcrumbs from './breadcrumbs';
import Header from './header';

export default function MainContent() {
  const { activeFolder, bookmarks, isLoading } = useAppStore();
  const data = activeFolder ? activeFolder.children! : bookmarks;

  return (
    <>
      <Header />
      <main className="mt-4 dark:pintree-bg-gray-900 flex-grow">
        <Breadcrumbs />
        {isLoading ? (
          <div className="grid gap-6 p-6 animate-pulse">
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-6 ">
              {[...Array(6)].map((_e, i) => (
                <div key={i} className="rounded-lg cursor-pointer flex flex-col items-center">
                  <div className="mb-2">
                    <div className="w-24 h-20 bg-gray-300 rounded-lg dark:bg-gray-600" />
                    <div className="h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700" />
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-1 border-t-1 border-gray-200 dark:pintree-border-gray-800" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6  animate-pulse">
              {[...Array(6)].map((_e, i) => (
                <div
                  key={i}
                  className="flex max-w-sm shadow-sm ring-1 ring-gray-900/5 dark:pintree-ring-gray-800 p-2 rounded-md"
                >
                  <div className="flex-shrink-0">
                    <span className="flex justify-center items-center bg-gray-300 dark:bg-gray-600 rounded-full w-12 h-12" />
                  </div>
                  <div className="ml-4 mt-2 w-full">
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded-full mb-2" />
                    <p className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Bookmarks data={data} />
        )}
      </main>
    </>
  );
}
