import axios, { AxiosResponse } from 'axios';
import { PartsInterface } from '../models/PartsInterface';

class PartsService {
  server = '';

  port = '';

  constructor(server = '', port = '') {
    this.server = server;
    this.port = port;
  }

  getPartsData = async (): Promise<AxiosResponse<PartsInterface[]>> =>
    axios.get<PartsInterface[]>(`${process.env.SERVER}:${process.env.PORT}/parts`);
}

export const partsService = new PartsService(process.env.SERVER, process.env.PORT);
