import { client } from "./client";

import type { Post, User, Comment } from "../types";

export type APIv1 = {
  posts: {
    fetchPost(id: number): Promise<Post>;
    fetchPosts(): Promise<Post[]>;
    fetchPostComments(postId: number): Promise<Comment[]>;
    fetchPostsByUserId(userId: number): Promise<Post[]>;
  };
  users: {
    fetchUser(id: number): Promise<User>;
    fetchUsers(): Promise<User[]>;
  };
};

export const v1: APIv1 = {
  posts: {
    async fetchPost(id: number): Promise<Post> {
      const res = await client.get<Post>(`/posts/${id}`);
      return res.data;
    },
    async fetchPosts(): Promise<Post[]> {
      const res = await client.get<Post[]>(`/posts`);
      return res.data;
    },
    async fetchPostComments(postId: number): Promise<Comment[]> {
      const res = await client.get<Comment[]>(`/posts/${postId}/comments`);
      return res.data;
    },
    async fetchPostsByUserId(userId: number): Promise<Post[]> {
      const res = await client.get<Post[]>(`/users/${userId}/posts`);
      return res.data;
    },
  },
  users: {
    async fetchUser(id: number): Promise<User> {
      const res = await client.get<User>(`/users/${id}`);
      return res.data;
    },
    async fetchUsers(): Promise<User[]> {
      const res = await client.get<User[]>(`/users`);
      return res.data;
    },
  },
};
