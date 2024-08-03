import SearchBar from './search-bar';
import ThemeButton from './theme-button';
import LogoSvg from '../assets/logo.svg';
import { MobileNavigation } from './mobile-navigation';

export default function Header() {
  return (
    <div className="items-center justify-between sticky top-0 z-40 flex h-16 shrink-0 gap-x-4 border-b border-gray-200 dark:pintree-border-gray-800 bg-white dark:pintree-bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="h-full items-center flex flex-1 gap-x-2 self-stretch lg:gap-x-6 justify-between">
        <div className="flex gap-x-4 justify-between">
          <MobileNavigation />
          <img className="h-8 w-auto lg:hidden" src={LogoSvg} alt="NTH Bookmarks" />
          <SearchBar />
        </div>
        <a href="#" className="lg:hidden ml-2 font-extrabold text-2xl dark:text-white">
          NTH Bookmarks
        </a>
        <div className="relative">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
