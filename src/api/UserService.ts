import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '../models/UserInterface';
import { UserSignUp } from './types';
import StoreApi from './storeApi';
import { UserProfileDataInterface } from '../store/user/types';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<UserInterface[]>> {
    return axios.get<UserInterface[]>(`${process.env.SERVER}:${process.env.PORT}/users`);
  }

  static async getUserById(id: number): Promise<AxiosResponse<UserProfileDataInterface[]>> {
    return axios.get<UserProfileDataInterface[]>(
      `${process.env.SERVER}:${process.env.PORT}/users/${id}`,
    );
  }

  static async updateUser(
    id: number,
    body: UserProfileDataInterface,
  ): Promise<AxiosResponse<UserProfileDataInterface>> {
    return StoreApi.put<UserProfileDataInterface>(
      `${process.env.SERVER}:${process.env.PORT}/users${id}`,
      body,
    );
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
