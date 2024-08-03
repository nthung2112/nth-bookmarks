import LogoSvg from '../assets/logo.svg';
import Navigation from './navigation';
import { useAppStore } from '@/store/app-store';

export default function Sidebar() {
  const isLoading = useAppStore((state) => state.isLoading);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      <div className="flex flex-col border-r border-gray-200 dark:pintree-border-gray-800 bg-white px-4 h-full font-semibold dark:pintree-bg-gray-900">
        <div className="flex p-0 h-16 shrink-0 items-center">
          <img className="pl-2 h-8 w-auto" src={LogoSvg} alt="NTH Bookmarks" />
          <a href="#" className="ml-3 font-bold text-xl dark:text-white">
            NTH Bookmarks
          </a>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar p-1 cursor-pointer">
          <div className="flex flex-1 flex-col">
            {isLoading ? (
              <div role="status" className="max-w-sm animate-pulse">
                {[...Array(10)].map((_e, i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                  />
                ))}
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Navigation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
