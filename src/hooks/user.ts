import useSWR from "swr";

import api from "../api";

export const useFetchUser = (id: number) => {
  const { data, error } = useSWR(["user", { id }], () =>
    api.v1.users.fetchUser(id)
  );
  return { data, error };
};

export const useFetchUsers = () => {
  const { data, error } = useSWR("users", () => api.v1.users.fetchUsers());
  return { data, error };
};
