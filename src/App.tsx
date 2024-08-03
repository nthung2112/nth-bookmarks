import { Outlet, createBrowserRouter, RouterProvider, LoaderFunctionArgs } from 'react-router-dom';

import MainPage from './routes/main-page';
import NotFound from './routes/not-found';
import { useAppStore } from './store/app-store';
import { ConfigItem } from './types';
import { getActiveFolderByPath, getPathMapping } from './store/helper';

function Layout() {
  return (
    <div className="h-full dark:pintree-bg-gray-900 bg-white">
      <Outlet />
    </div>
  );
}

let isFirstLoad = true;

async function fetchData(paths: string[]): Promise<void> {
  const res = await fetch(
    'https://gist.githubusercontent.com/nthung2112/08ae1e17d95b3c21865be8db170dccee/raw/data.json'
  );
  const data = (await res.json()) as ConfigItem[];
  const activeFolder = getActiveFolderByPath(data, paths);

  isFirstLoad = false;
  useAppStore.setState({
    isLoading: false,
    data,
    bookmarks: data,
    pathMapping: getPathMapping(data),
    activeFolder: activeFolder ?? data[0],
  });
}

async function appLoader({ request }: LoaderFunctionArgs) {
  if (!isFirstLoad) {
    return null; // already loaded
  }
  const url = new URL(request.url);
  const path = url.searchParams.get('p');
  const paths = path ? path.split('_') : [];
  fetchData(paths);

  return null;
}

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      loader: appLoader,
      children: [
        {
          element: <MainPage />,
          path: '/',
        },
        {
          element: <NotFound />,
          path: '*',
        },
      ],
    },
  ],
  {
    basename: '/nth-bookmarks/',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
