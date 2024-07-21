import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ConfigItem } from '@/types';
import { useAppStore } from '@/store/app-store';

function getBreadcrumbs(result: ConfigItem[], data: ConfigItem[], paths: string[]) {
  const firstElement = paths.shift();
  const current = data.find((item) => item.id === firstElement);

  if (!current) {
    return result;
  }

  result.push(current);

  if (paths.length === 0 || !current.children) {
    return result;
  }

  return getBreadcrumbs(result, current.children, paths);
}

export default function Breadcrumbs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setActiveFolder, data, pathMapping, searchKey } = useAppStore();
  const path = (searchParams.get('p') ?? '') as string;
  const breadcrumbs = searchKey
    ? ([
        {
          id: 'search-result',
          title: 'Search Result',
          type: 'folder',
          addDate: -1,
          icon: '',
          url: '#',
        },
      ] as ConfigItem[])
    : getBreadcrumbs([], data, path.split('_'));
  const totalItem = breadcrumbs.length;

  const handleSetActiveFolder = (folder: ConfigItem) => () => {
    setActiveFolder(folder);
    setSearchParams({ p: pathMapping[folder.id] });
  };

  return (
    <div className="mt-2 px-6 text-sm text-gray-400 flex justify-between items-center">
      <div className="">
        {breadcrumbs.map((folder, index) => (
          <Fragment key={folder.id}>
            <span
              className="cursor-pointer hover:underline"
              onClick={handleSetActiveFolder(folder)}
            >
              {folder.title}
            </span>
            {totalItem - 1 !== index && <span> &gt; </span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
