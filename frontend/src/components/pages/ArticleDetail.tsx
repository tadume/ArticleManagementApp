import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

export const ArticleDetail: FC = memo(() => {
  const { id } = useParams();
  return (
    <>
      <h1>記事詳細画面</h1>
      <h1>{id}</h1>
    </>
  );
});
