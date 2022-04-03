import { useRouter } from "next/router";

import Loading from "../../src/components/Loading";
import { useFetchPostsByUserId } from "../../src/hooks/post";
import { useFetchUser } from "../../src/hooks/user";

import type { NextPage } from "next";

const User: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const userId = Number(id);

  const { data: user } = useFetchUser(userId);
  const { data: posts } = useFetchPostsByUserId(userId);

  return (
    <div>
      <div>
        {user ? (
          <>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div>
        {posts ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default User;
