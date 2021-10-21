import User from '../../../../core/entities/User';
import { IUsersRepository } from '../../IUserRepository';
import schema from '../schemas/userSchema';

export default class UsersRepository implements IUsersRepository {
  async exists(id: string): Promise<boolean> {
    const user = schema.query({ id: { eq: id } });

    return !!user;
  }

  async create(user: User): Promise<void> {
    try {
      await schema.create(user);
    } catch (err) {
      console.log(err.message);
      throw new Error('400 :: Bad params');
    }
  }

  async findById(id: string): Promise<User> {
    return new User({ name: '1', email: id, password: '', role: '' });
  }
}
