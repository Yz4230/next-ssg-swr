import { useRouter } from "next/router";

import Loading from "../../src/components/Loading";
import { useFetchPost, useFetchPostComments } from "../../src/hooks/post";

import type { NextPage } from "next";

const Post: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const postId = Number(id);

  const { data: post } = useFetchPost(postId);
  const { data: comments } = useFetchPostComments(postId);

  return (
    <div>
      <div>
        {post ? (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div>
        {comments ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.name}</li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Post;
