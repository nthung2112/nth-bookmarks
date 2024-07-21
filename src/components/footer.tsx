export default function Footer() {
  return (
    <footer className="bg-white w-full dark:pintree-bg-gray-900">
      <div className="mx-auto px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://x.com" target="_blank" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">X</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400 flex justify-center items-center">
            &copy; {new Date().getFullYear()}&nbsp;Built with
            <a
              href="#"
              className="text-main-500 hover:text-main-500 flex items-center ml-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="12"
                height="12"
                className="inline-block mr-1"
              >
                <circle id="background" cx="256" cy="256" fill="#00a1f5" r="256" />
                <path
                  d="m355.92 99.87h-199.84a15.24 15.24 0 0 0 -15.24 15.23v281.53a15.24 15.24 0 0 0 25.33 11.37l90.09-79.68 89.54 79.68a15.23 15.23 0 0 0 25.36-11.38v-281.52a15.24 15.24 0 0 0 -15.24-15.23zm-46.41 77.63h-107a15.23 15.23 0 1 1 0-30.46h107a15.23 15.23 0 1 1 0 30.46z"
                  fill="#fff"
                />
              </svg>
              NTH Bookmarks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
