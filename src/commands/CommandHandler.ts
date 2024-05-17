export interface CommandHandler<TCommand, TResult> {
    handle(command: TCommand): Promise<TResult>;
  }
  