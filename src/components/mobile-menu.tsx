export default function MobileMenu() {
  return (
    <div
      id="off-canvas-menu"
      className="relative z-50 lg:hidden hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        id="off-canvas-backdrop"
        className="fixed inset-0 bg-gray-900/80 opacity-0 transition-opacity ease-linear duration-300"
      ></div>
      <div className="fixed inset-0 flex">
        <div
          id="off-canvas-content"
          className="relative mr-16 flex w-full max-w-xs flex-1 -translate-x-full transition ease-in-out duration-300 transform"
        >
          <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button id="close-sidebar-button" type="button" className="-m-2.5 p-2.5">
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:pintree-bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="pl-2 h-8 w-auto" src="/logo.svg" alt="NTH Bookmarks" />
              <a href="" className="ml-4 font-extrabold text-2xl dark:text-white">
                NTH Bookmarks
              </a>
            </div>
            <div id="sidebar-2" className="flex flex-1 flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
