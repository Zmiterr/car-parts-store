import { AxiosResponse } from 'axios';
import { PartsInterface } from '../models/PartsInterface';
import storeApi from './storeApi';
import { AppService } from './AppService';

class LotsService extends AppService {
  getLotsData = async (): Promise<AxiosResponse<PartsInterface[]>> =>
    storeApi.get<PartsInterface[]>(`${this.server}:${this.port}/lots`);

  getLotsDataByDealer = async (dealerId: number): Promise<AxiosResponse<PartsInterface[]>> =>
    storeApi.get<PartsInterface[]>(`${this.server}:${this.port}/lots?${dealerId}`);

  createLot = async (payload: any): Promise<AxiosResponse<PartsInterface>> =>
    storeApi.post<PartsInterface>(`${this.server}:${this.port}/lots`, { data: payload });

  deleteLot = async (id: string): Promise<AxiosResponse> =>
    storeApi.delete(`${this.server}:${this.port}/lots/${id}`, { data: id });

  updateLot = async (id: string, payload: any): Promise<AxiosResponse<PartsInterface>> =>
    storeApi.put<PartsInterface>(`${this.server}:${this.port}/lots/${id}`, { data: payload });
}

export const lotsService = new LotsService(process.env.SERVER, process.env.PORT);
