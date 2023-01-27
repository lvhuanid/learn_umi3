//Use declare namespace to describe types or values accessed by dotted notation.
declare namespace API {
  interface IRole {
    isAdmin: boolean;
    isEditor: boolean;
  }
  interface IUser {
    id: number;
    name: string;
    password?: string;
    role?: IRole;
  }
}
