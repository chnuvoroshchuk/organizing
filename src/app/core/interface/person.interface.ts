interface PersonInterface {
  id: number,
  email: string,
  username: string,
  password: string,
  roles?: RolesInterface[],
  // array RolesInterface -> ok? and roles? ok?
  age?: number
}
