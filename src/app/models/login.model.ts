export class UserLogin {
  constructor(
    public UserName: string,
    public Password: string,
    public RememberMe: boolean
  ) { }
}

export class ResetPasswordData {
    constructor(
        public username: string,
        public password: string
    ) { }
}
