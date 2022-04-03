import Loading from "../../src/components/Loading";
import PostBoard from "../../src/components/PostBoard";
import { useFetchPosts } from "../../src/hooks/post";

import type { NextPage } from "next";

const Posts: NextPage = () => {
  const { data: posts } = useFetchPosts();

  return posts ? <PostBoard posts={posts} /> : <Loading />;
};

export default Posts;
