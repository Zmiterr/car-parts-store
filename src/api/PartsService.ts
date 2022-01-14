import axios, { AxiosResponse } from 'axios';
import { PartsInterface } from '../models/PartsInterface';
import { AppService } from './AppService';

class PartsService extends AppService {
  getPartsData = async (): Promise<AxiosResponse<PartsInterface[]>> =>
    axios.get<PartsInterface[]>(`${process.env.SERVER}:${process.env.PORT}/parts`);
}

export const partsService = new PartsService(process.env.SERVER, process.env.PORT);
