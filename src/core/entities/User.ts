export enum Roles {
  Admin = 'Admin',
}

export default class User {
  static readonly Roles = Roles;

  public readonly id: string;

  public name: string;

  public email: string;

  public password: string;

  public role: string;

  public createdAt?: Date;

  public updatedAt?: Date;

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props);
  }
}
