import UserRepository from '../../../infra/db/dynamoose/implementations/userRepository';
import MailtrapMailProvider from '../../../infra/providers/implementations/MailtrapMailProvider';
import { UserService } from '../../services/user/UserService';
import { ControllerResponse } from '../ControllerResponse';
import IUserController from './IUserController';

const userRepository = new UserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const userService = new UserService(userRepository, mailtrapMailProvider);

export default class UserController implements IUserController {
  async create(event: any): Promise<ControllerResponse> {
    return userService.create({ ...event.body });
  }

  async get(event: any): Promise<ControllerResponse> {
    const { id } = event.params;
    return userService.get(id);
  }
}
