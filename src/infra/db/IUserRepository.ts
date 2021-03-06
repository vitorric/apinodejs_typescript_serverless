import User from '../../core/entities/User';

export interface IUsersRepository {
  exists(email: string): Promise<boolean>;
  create(user: User): Promise<void>;
  findById(userId: string): Promise<User>;
}
