import useSWR from "swr";

import api from "../api";

export const useFetchPost = (id: number) => {
  const { data, error } = useSWR(["post", { id }], () =>
    api.v1.posts.fetchPost(id)
  );
  return { data, error };
};

export const useFetchPosts = () => {
  const { data, error } = useSWR("posts", () => api.v1.posts.fetchPosts());
  return { data, error };
};

export const useFetchPostComments = (id: number) => {
  const { data, error } = useSWR(["postComments", { id }], () =>
    api.v1.posts.fetchPostComments(id)
  );
  return { data, error };
};

export const useFetchPostsByUserId = (userId: number) => {
  const { data, error } = useSWR(["posts", { userId }], () =>
    api.v1.posts.fetchPostsByUserId(userId)
  );
  return { data, error };
};
