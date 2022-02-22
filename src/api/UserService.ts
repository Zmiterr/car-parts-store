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
      `${process.env.SERVER}:${process.env.PORT}/users/${id}`,
      body,
    );
  }

  static async updateUserLocation(id: number, body: string): Promise<AxiosResponse<string>> {
    return StoreApi.put<string>(
      `${process.env.SERVER}:${process.env.PORT}/users-location/${id}`,
      body,
    );
  }

  static async updateUserPayInfo(
    id: number,
    body: UserProfileDataInterface,
  ): Promise<AxiosResponse<UserProfileDataInterface>> {
    return StoreApi.put<UserProfileDataInterface>(
      `${process.env.SERVER}:${process.env.PORT}/users-pay/${id}`,
      body,
    );
  }

  static async updateUserPassword(
    id: number,
    body: UserProfileDataInterface,
  ): Promise<AxiosResponse<UserProfileDataInterface>> {
    return StoreApi.put<UserProfileDataInterface>(
      `${process.env.SERVER}:${process.env.PORT}/users-password/${id}`,
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
