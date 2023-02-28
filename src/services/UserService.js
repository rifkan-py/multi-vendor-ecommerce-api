class UserService {
  constructor(userRepository, hashService, tokenService) {
    this.userRepository = userRepository;
    this.hashService = hashService;
    this.tokenService = tokenService;
  }

  async createUser(username, firstName, lastName, email, password) {
    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) {
      throw new Error("Email address already taken");
    }

    const hashedPassword = await this.hashService.hashPassword(password);

    const user = await this.userRepository.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async loginUser(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid Credential.");
    }
    const isPasswordValid = this.hashService.comparePasswords(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid Credentials.");
    }

    const token = await this.tokenService.generateToken({ id: user.id });
    return token;
  }
}

export default UserService;
