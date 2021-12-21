import axios, { AxiosResponse } from 'axios';

export default class AuthService {
  static async signUp(username: string, password: string): Promise<AxiosResponse> {
    return axios({
      method: 'post',
      url: `${process.env.SERVER}:${process.env.PORT}/signup`,
      headers: {},
      data: {
        username,
        password,
      },
    });
  }
}
