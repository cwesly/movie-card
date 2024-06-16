export enum InputType {
  Email = "Email",
  Password = "Password",
}

export type TypeError = {
  email: string;
  password: string;
};

export type TypeIsTouched = {
  email: boolean;
  password: boolean;
};
