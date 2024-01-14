import { useCallback, useState } from "react";
import { UserType } from "../types/api/UserType";
import axios from "axios";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    axios
      .get<Array<UserType>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.log(error.message);
        showMessage({ title: "ユーザの取得に失敗しました。", status: "error" });
      });
  }, [setUsers]);

  return { users, getUsers };
};
