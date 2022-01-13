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

  createLot = async (payload: any): Promise<AxiosResponse<PartsInterface>> =>
    storeApi.post<PartsInterface>(`${this.server}:${this.port}/lots`, { data: payload });

  deleteLot = async (id: string): Promise<AxiosResponse> =>
    storeApi.delete(`${this.server}:${this.port}/lots/${id}`, { data: id });

  updateLot = async (id: string, payload: any): Promise<AxiosResponse<PartsInterface>> =>
    storeApi.put<PartsInterface>(`${this.server}:${this.port}/lots/${id}`, { data: payload });
}

export const lotsService = new LotsService(process.env.SERVER, process.env.PORT);
