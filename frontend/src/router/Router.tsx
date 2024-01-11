import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { ArticleRoutes } from './ArticleRoutes ';
import { Home } from '../components/pages/Home';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route path="/articles">
        {ArticleRoutes.map((urls) => (
          <Route
            key={urls.path}
            path={urls.path}
            element={<HeaderLayout>{urls.children}</HeaderLayout>}
          />
        ))}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <HeaderLayout>
            <Page404 />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
