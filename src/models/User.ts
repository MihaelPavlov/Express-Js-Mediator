export class User {
  constructor(id: string,username: string, password: string) {
    this.id = id;
    this.password=password;
    this.username = username;
  }
  id: string;
  username: string;
  password: string;
}
