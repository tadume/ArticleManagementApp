import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useScreenTransition = () => {
  const navigate = useNavigate();

  const onClickArticles = useCallback(() => navigate("/articles"), []);
  const onClickSetting = useCallback(() => navigate("/setting"), []);
  const onClickHome = useCallback(() => navigate("/home"), []);

  return { onClickArticles, onClickSetting, onClickHome };
};
