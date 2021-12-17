import axios, { AxiosResponse } from 'axios';

export default class AuthService {
  static async signUp(username: string, password: string): Promise<AxiosResponse> {
    return axios({
      method: 'post',
      url: 'http://localhost:7000/signup',
      headers: {},
      data: {
        username,
        password,
      },
    });
  }
}
