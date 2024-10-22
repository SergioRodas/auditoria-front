export interface User {
  id: number;
  email: string;
  username: string;
  rol: "ADMIN" | "CLIENT";
  token?: string;
}
