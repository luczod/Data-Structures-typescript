import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

export const router = createBrowserRouter([
  {
    path: '/chapter03',
    element: <App />,
  },
  {
    path: '/',
    element: <App />,
  },
]);
