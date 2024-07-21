import { useAppStore } from '@/store/app-store';
import { ConfigItem } from '@/types';
import { useSearchParams } from 'react-router-dom';

export default function Bookmarks({ data }: { data: ConfigItem[] }) {
  const folders = data.filter((item) => item.type === 'folder') || [];
  const links =
    data.filter((item) => item.type === 'link').sort((a, b) => b.addDate - a.addDate) || [];
  const { pathMapping, setActiveFolder } = useAppStore();
  let [, setSearchParams] = useSearchParams();

  if (folders.length === 0 && links.length === 0) {
    return <div className="flex justify-center items-center h-full">Not Found</div>;
  }

  const handlClickFolder = (folder: ConfigItem) => () => {
    setActiveFolder(folder);
    setSearchParams({ p: pathMapping[folder.id] });
  };

  return (
    <div className="grid gap-6 p-6">
      {folders.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-6">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="folder-card text-gray rounded-lg cursor-pointer flex flex-col items-center"
              onClick={handlClickFolder(folder)}
            >
              <div className="mb-2">
                <svg viewBox="0 0 100 80" className="folder__svg">
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="80"
                    fill="rgb(105, 173, 254)"
                    rx={10}
                    ry={10}
                  />
                  <rect x="15" y="8" width="70" height="60" className="paper-1" />
                  <rect x="10" y="18" width="80" height="50" className="paper-2" />
                  <rect x="0" y="10" width="100" height="70" className="folder__front" />
                  <rect x="0" y="10" width="100" height="70" className="folder__front right" />
                </svg>
                <h2 className="text-xs font-normal text-center w-full truncate dark:text-gray-400">
                  {folder.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
      {folders.length > 0 && links.length > 0 && (
        <hr className="my-1 border-t-1 border-gray-200 dark:pintree-border-gray-800" />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
        {links.map((link) => (
          <div
            key={link.id}
            className="cursor-pointer hover:shadow-sm transition-shadow bg-white shadow-sm ring-1 ring-gray-900/5 dark:pintree-ring-gray-800 rounded-lg hover:bg-gray-100 dark:pintree-bg-gray-900 dark:hover:pintree-bg-gray-800"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 w-full flex items-center"
            >
              <img
                className="w-8 h-8 mr-4 rounded-full flex-shrink-0 card-icon-bg"
                src={link.icon || 'default-icon.svg'}
                alt={link.title}
                onError={(event) => {
                  event.target.src = 'default-icon.svg';
                }}
              />
              <div className="flex flex-col overflow-hidden">
                <h2 className="text-sm font-medium mb-1 truncate dark:text-gray-400">
                  {link.title}
                </h2>
                <p className="text-xs text-gray-400 dark:text-gray-600 dark:hover:text-gray-400 truncate">
                  {link.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
