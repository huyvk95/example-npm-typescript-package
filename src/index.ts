export type User = {
  username: string;
  password: string;
};

export function greet(name: string): string {
  return `Hello ${name}`;
}

export function getUser(): User {
  return {
    username: "hehehe",
    password: "hahaha",
  };
}
