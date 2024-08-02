import LogoSvg from '../assets/logo.svg';
import Navigation from './navigation';
import { useAppStore } from '@/store/app-store';

export default function Sidebar() {
  const { data, pathMapping } = useAppStore();
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
          <div id="sidebar" className="flex flex-1 flex-col">
            <Navigation isFirstRender data={data} pathMapping={pathMapping} />
          </div>
        </div>
      </div>
    </div>
  );
}
