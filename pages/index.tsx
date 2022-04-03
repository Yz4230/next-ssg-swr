import api from "../src/api";
import PostBoard from "../src/components/PostBoard";
import UserBoard from "../src/components/UserBoard";

import type { Post, User } from "../src/types";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  users: User[];
  posts: Post[];
};

const Index: NextPage<Props> = ({ users, posts }) => {
  return (
    <>
      <UserBoard users={users} />
      <PostBoard posts={posts} />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  // `getStaticProps`のサンプルのために使用しています。
  // `useSWR`でフェッチしても構いません。
  const users = await api.v1.users.fetchUsers();
  const posts = await api.v1.posts.fetchPosts();

  return {
    props: {
      users,
      posts,
    },
  };
};
