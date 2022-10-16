export interface JwtResponseI {
  dataUser:{
    name: string,
    nit: number,
    email: string,
    password: string,
    accessToken: string,
    expiresIn: string
  }
}
