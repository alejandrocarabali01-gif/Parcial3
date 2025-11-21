export interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, email: "test@gmail.com", password: "123456" }
];
