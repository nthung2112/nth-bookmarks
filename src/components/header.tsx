import SearchBar from './search-bar';
import ThemeButton from './theme-button';

export default function Header() {
  return (
    <div className="items-center justify-between sticky top-0 z-40 flex h-16 shrink-0 gap-x-4 border-b border-gray-200 dark:pintree-border-gray-800 bg-white dark:pintree-bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="h-full items-center flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between">
        <div className="flex gap-x-4 justify-between">
          <button
            id="open-sidebar-button"
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <img className="pl-2 h-8 w-auto lg:hidden" src="/logo.svg" alt="NTH Bookmarks" />
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
