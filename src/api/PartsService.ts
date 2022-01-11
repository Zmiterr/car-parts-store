import axios, { AxiosResponse } from 'axios';
import { PartsInterface } from '../models/PartsInterface';

export default class PartsService {
  static async getPartsData(): Promise<AxiosResponse<PartsInterface[]>> {
    return axios.get<PartsInterface[]>(`${process.env.SERVER}:${process.env.PORT}/parts`);
  }
}
