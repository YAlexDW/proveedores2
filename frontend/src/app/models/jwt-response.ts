export interface JwtResponseI {
  dataUser:{
    email: string,
    password: string,
    accessToken: string,
    expiresIn: string
  }
}
