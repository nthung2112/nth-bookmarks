import { useAppStore } from '@/store/app-store';
import { KeyboardEvent } from 'react';

export default function SearchBar() {
  const { searchKey, setSearchKey } = useAppStore();

  const handleInputChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchKey(event.currentTarget.value);
    }
  };

  return (
    <div className="hidden lg:block relative w-72 h-full items-center justify-between">
      <button id="searchButton" className="absolute h-full text-gray-400 rounded">
        <svg
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <input
        type="search"
        className="text-sm text-gray-900 dark:text-gray-400 pl-8 h-full border-0 focus:outline-none focus:ring-0 dark:pintree-bg-gray-900"
        placeholder="Search..."
        onKeyDown={handleInputChange}
      />
      {searchKey && (
        <button className="text-sm text-gray-500 mr-4 rounded" onClick={() => setSearchKey('')}>
          Clear
        </button>
      )}
    </div>
  );
}
