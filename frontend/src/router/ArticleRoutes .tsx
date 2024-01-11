import { ReactNode } from 'react';
import { Articles } from '../components/pages/Articles';
import { ArticleDetail } from '../components/pages/ArticleDetail';

export const ArticleRoutes: Array<{ path: string; children: ReactNode }> = [
  {
    path: '',
    children: <Articles />,
  },
  {
    path: ':id',
    children: <ArticleDetail />,
  },
];
