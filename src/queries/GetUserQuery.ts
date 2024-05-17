import { Identifiable } from "../infrastructure/Identifiable";

export class GetUserQuery implements Identifiable {
  static identifier = "GetUserQuery";
  readonly identifier = GetUserQuery.identifier;

  constructor(public readonly userId: string) {}
}