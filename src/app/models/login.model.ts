export class LoginData {
  constructor(
    public UserName: string,
    public Password: string,
    public RememberMe: boolean
  ) { }
}

export class ResetPasswordData {
    constructor(
        public UserName: string,
        public Password: string
    ) { }
}
