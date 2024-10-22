import { User } from "../interfaces/User";
import { client, gql } from "./api";

interface LoginResponse {
  login: User;
}

const LOGIN_QUERY = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      rol
      token
    }
  }
`;

export const loginRequest = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<User> => {
  try {
    const { data } = await client.query<LoginResponse>({
      query: LOGIN_QUERY,
      variables: { username, password },
    });
    return data.login;
  } catch (error: any) {
    if (error.message.startsWith("[controlled]")) {
      const errorMessage = error.message.replace("[controlled]", "").trim();
      throw new Error(errorMessage);
    } else {
      throw new Error(
        "Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  }
};
