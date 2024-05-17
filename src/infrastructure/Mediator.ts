import { Container } from "inversify";
import { CommandHandler } from "../commands/CommandHandler";
import { QueryHandler } from "../queries/QueryHandler";
import { Identifiable } from "./Identifiable";

export class Mediator {
  private container: Container;

  constructor(container: Container) {
    this.container = container;
  }

  public send<TCommand extends Identifiable, TResult>(
    command: TCommand
  ): Promise<TResult> {
    const handler = this.container.get<CommandHandler<TCommand, TResult>>(
      command.constructor.name
    );
    return handler.handle(command);
  }

  public query<TQuery extends Identifiable, TResult>(
    query: TQuery
  ): Promise<TResult> {
    const handler = this.container.get<QueryHandler<TQuery, TResult>>(
      query.constructor.name
    );
    return handler.handle(query);
  }
}
