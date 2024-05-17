import { Request, Response } from "express";
import { Mediator } from "../infrastructure/Mediator";
import { CreateUserCommand } from "../commands/CreateUserCommand";
import { GetUserQuery } from "../queries/GetUserQuery";
import { container } from "../inversify.config";
import { User } from "../models/User";

const mediator = new Mediator(container);

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const command = new CreateUserCommand(username, password);
    const user = await mediator.send<CreateUserCommand, User>(command);
    res.json(user);
  }

  static async getUser(req: Request, res: Response) {
    const { userId } = req.params;
    const query = new GetUserQuery(userId ? userId : "0");
    const user = await mediator.query<GetUserQuery, User>(query);
    res.json(user);
  }
}
