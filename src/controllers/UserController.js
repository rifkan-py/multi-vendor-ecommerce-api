class UserController {
  constructor(userService) {
    this.userService = userService;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  async register(req, res, next) {
    const { username, firstName, lastName, email, password } = req.body;
    try {
      const user = await this.userService.createUser(
        username,
        firstName,
        lastName,
        email,
        password
      );

      // call email service to verify email account

      return res.status(201).json(user);
    } catch (exception) {
      console.log(exception);
      return next(exception);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await this.userService.loginUser(email, password);
      return res.status(200).json({ token });
    } catch (exception) {
      console.log(exception);
      return next(exception);
    }
  }
}

module.exports = UserController;
