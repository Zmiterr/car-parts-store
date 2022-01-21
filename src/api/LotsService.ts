import { AxiosResponse } from 'axios';

import storeApi from './storeApi';
import { AppService } from './AppService';
import { LotInterface } from '../store/lots/types';
import { SubmitBodyInterface } from '../pages/MyLots/MyLots';

class LotsService extends AppService {
  getLotsData = async (): Promise<AxiosResponse<LotInterface[]>> =>
    storeApi.get<LotInterface[]>(`${this.server}:${this.port}/lots`);

  getLotsDataByDealer = async (dealerId: number): Promise<AxiosResponse<LotInterface[]>> =>
    storeApi.get<LotInterface[]>(`${this.server}:${this.port}/lots?${dealerId}`);

  createLot = async (payload: SubmitBodyInterface): Promise<AxiosResponse<LotInterface>> =>
    storeApi.post<LotInterface>(`${this.server}:${this.port}/lots`, { ...payload });

  deleteLot = async (id: string): Promise<AxiosResponse> =>
    storeApi.delete(`${this.server}:${this.port}/lots/${id}`, { data: id });

  updateLot = async (id: string, payload: LotInterface): Promise<AxiosResponse<LotInterface>> =>
    storeApi.put<LotInterface>(`${this.server}:${this.port}/lots/${id}`, { ...payload });
}

export const lotsService = new LotsService(process.env.SERVER, process.env.PORT);
