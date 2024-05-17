import { injectable } from "inversify";
import { GetUserQuery } from "./GetUserQuery";
import { QueryHandler } from "./QueryHandler";
import { User } from "../models/User";
import "reflect-metadata";

@injectable()
export class GetUserHandler implements QueryHandler<GetUserQuery, User> {
  async handle(query: GetUserQuery): Promise<User> {
    // Fetch user from the database (pseudo code)
    // const user = await userRepository.findById(query.userId);
    const user = new User(query.userId,"dummyUser", "dummyPassword");
    return user;
  }
}
