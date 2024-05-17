import { Identifiable } from "../infrastructure/Identifiable";

export class CreateUserCommand implements Identifiable {
  static identifier = "CreateUserCommand";
  readonly identifier = CreateUserCommand.identifier;

  constructor(public readonly username: string, public readonly password: string) {}
}