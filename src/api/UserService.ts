import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '../models/UserInterface';
import { UserSignUp } from './types';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<UserInterface[]>> {
    return axios.get<UserInterface[]>(`${process.env.SERVER}:${process.env.PORT}/users`);
  }

  static async setUser(
    username: string,
    password: string,
    role: string,
  ): Promise<AxiosResponse<UserSignUp>> {
    return axios({
      method: 'post',
      url: `${process.env.SERVER}:${process.env.PORT}/users`,
      headers: {},
      data: {
        username,
        password,
        role,
      },
    });
  }
}
