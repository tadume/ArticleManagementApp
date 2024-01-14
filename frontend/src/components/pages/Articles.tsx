import { Center, Spinner, Stack } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';

import { ArticleCard } from '../organisms/articles/ArticleCard';
import { useAllArticles } from '../../hooks/useAllArticles';
import { useAllUsers } from '../../hooks/useAllUsers';

export const Articles: FC = memo(() => {
  const { articles, getArticles, loading } = useAllArticles();
  const { users, getUsers } = useAllUsers();
  useEffect(() => {
    getUsers();
    getArticles();
  }, []);

  // console.log(users);

  const today = new Date();
  const tags = ['TypeScript', 'JavaScript'];

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Stack pt={5} spacing={4}>
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                username="daichi tadume"
                title={article.title}
                updated_at={today}
                tags={tags}
              />
            );
          })}
        </Stack>
      )}
    </>
  );
});
