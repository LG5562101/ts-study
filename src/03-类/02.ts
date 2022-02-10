class User {
  static instance: User | null = null
  protected constructor () {}
  static make () {
    if (!User.instance) User.instance = new User()
    return User.instance
  }
}