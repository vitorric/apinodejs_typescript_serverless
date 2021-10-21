import User from '../../../../core/entities/User';
import { IUsersRepository } from '../../IUserRepository';
import schema from '../schemas/userSchema';

export default class UsersRepository implements IUsersRepository {
  async exists(email: string): Promise<boolean> {
    const user = await schema.findOne({ email }).exec();
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

  async findById(userId: string): Promise<User> {
    const user = (await schema.findOne({ _id: userId }).exec()) as User;
    return user;
  }
}
