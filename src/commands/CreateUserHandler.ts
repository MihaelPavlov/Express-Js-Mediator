import {injectable} from "inversify";
import { CreateUserCommand } from "./CreateUserCommand";
import { CommandHandler } from "./CommandHandler";
import { User } from "../models/User";

@injectable()
export class CreateUserHandler implements CommandHandler<CreateUserCommand, User> {
  async handle(command: CreateUserCommand): Promise<User> {
    const user = new User("1",command.username, command.password);
    return user;
  }
}
