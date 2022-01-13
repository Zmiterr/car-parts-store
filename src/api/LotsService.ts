import { AxiosResponse } from 'axios';
import { PartsInterface } from '../models/PartsInterface';
import storeApi from './storeApi';

class LotsService {
  server = '';

  port = '';

  constructor(server = '', port = '') {
    this.server = server;
    this.port = port;
  }

  getLotsData = async (): Promise<AxiosResponse<PartsInterface[]>> =>
    storeApi.get<PartsInterface[]>(`${this.server}:${this.port}/lots`);

  deleteLot = async (id: string): Promise<AxiosResponse> =>
    storeApi.delete<PartsInterface[]>(`${this.server}:${this.port}/lots/${id}`, { data: id });
}

export const lotsService = new LotsService(process.env.SERVER, process.env.PORT);
