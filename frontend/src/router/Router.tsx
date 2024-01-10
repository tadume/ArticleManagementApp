import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Articles } from '../components/pages/Articles';
import { ArticleDetail } from '../components/pages/ArticleDetail';
import { Login } from '../components/pages/Login';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/articles">
        <Route path="" element={<Articles />} />
        <Route path=":id" element={<ArticleDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
});
