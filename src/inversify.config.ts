import { Container } from "inversify";
import { CreateUserCommand } from "../src/commands/CreateUserCommand";
import { CreateUserHandler } from "../src/commands/CreateUserHandler";
import { GetUserQuery } from "../src/queries/GetUserQuery";
import { GetUserHandler } from "./queries/GetUserHandler";
import 'reflect-metadata';

// Create a new Inversify container
const container = new Container();

// Bind the command handlers
container.bind<CreateUserHandler>(CreateUserCommand.identifier).to(CreateUserHandler);
container.bind<GetUserHandler>(GetUserQuery.identifier).to(GetUserHandler);

export { container };