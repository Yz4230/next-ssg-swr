import Loading from "../../src/components/Loading";
import UserBoard from "../../src/components/UserBoard";
import { useFetchUsers } from "../../src/hooks/user";

import type { NextPage } from "next";

const Users: NextPage = () => {
  const { data: users } = useFetchUsers();

  return users ? <UserBoard users={users} /> : <Loading />;
};

export default Users;
