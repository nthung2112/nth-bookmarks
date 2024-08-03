import { useAppStore } from '@/store/app-store';
import { ConfigItem } from '@/types';
import clsx from 'clsx';
import { Fragment, MouseEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type NavigationProps = {
  data: ConfigItem[];
  pathMapping: Record<string, string>;
  isFirstRender?: boolean;
  className?: string;
};

export default function Navigation() {
  const { data, pathMapping } = useAppStore();
  return <NavigationItem isFirstRender data={data} pathMapping={pathMapping} />;
}

export function NavigationItem({ data, isFirstRender, className, pathMapping }: NavigationProps) {
  const { activeFolder, setActiveFolder } = useAppStore();
  let [, setSearchParams] = useSearchParams();
  const [expandedKeys, setExpandedKeys] = useState<string[]>(
    isFirstRender && data.length > 0 ? [data[0].id] : []
  );

  const handleClick = (folder: ConfigItem) => (event: MouseEvent<HTMLElement>) => {
    if (!(event.target as HTMLElement).closest('svg')) {
      setActiveFolder(folder);
      setSearchParams({ p: pathMapping[folder.id] });
    }

    if (folder.children?.every((item) => item.type === 'link')) {
      return;
    }

    if (expandedKeys.includes(folder.id)) {
      setExpandedKeys((cur) => cur.filter((id) => id !== folder.id));
    } else {
      setExpandedKeys((cur) => [...cur, folder.id]);
    }
  };

  return (
    <ul className={className ? className : 'space-y-1'}>
      {data
        .filter((item) => item.type === 'folder')
        .map((folder, index) => (
          <Fragment key={index}>
            <li
              onClick={handleClick(folder)}
              className={clsx(
                'items-center group flex justify-between gap-x-3 rounded-md p-2 text-gray-700 dark:text-gray-400 hover:text-main-500 hover:bg-gray-50 dark:hover:pintree-bg-gray-800 bg-opacity-50',
                activeFolder?.id === folder.id && 'sidebar-active'
              )}
            >
              <div className="flex items-center space-x-2 truncate">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7a2 2 0 012-2h4l2 2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                    />
                  </svg>
                </span>

                <a className="flex text-sm leading-6 font-semibold dark:text-gray-400">
                  {folder.title}
                </a>
              </div>

              {folder.children && folder.children.length > 0 && (
                <span
                  className={clsx(
                    'ml-2 transform transition-transform',
                    expandedKeys.includes(folder.id) && 'rotate-90'
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </li>
            {folder.children && folder.children.length > 0 && (
              <NavigationItem
                data={folder.children}
                className={clsx('ml-4 space-y-2', !expandedKeys.includes(folder.id) && 'hidden')}
                pathMapping={pathMapping}
              />
            )}
          </Fragment>
        ))}
    </ul>
  );
}
