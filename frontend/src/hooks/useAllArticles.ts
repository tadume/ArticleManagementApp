import { useCallback, useState } from "react";
import { ArticleType } from "../types/api/ArticleType";
import axios from "axios";
import { useMessage } from "./useMessage";

export const useAllArticles = () => {
  const { showMessage } = useMessage();
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getArticles = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<ArticleType>>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setArticles(res.data))
      .catch((error) => {
        console.log(error.message);
        showMessage({ title: "記事の取得に失敗しました", status: "error" });
      })
      .finally(() => setLoading(false));
  }, [setArticles]);
  return { getArticles, articles, loading };
};
