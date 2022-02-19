import { AxiosResponse } from 'axios';
import storeApi from './storeApi';
import { AppService } from './AppService';
import { config } from '../config/config';
import { OrderInterface } from '../store/orders/types';
// import { SubmitBodyInterface } from '../pages/MyOrders/MyOrders';

class OrdersService extends AppService {
  getOrdersData = async (): Promise<AxiosResponse<OrderInterface[]>> =>
    storeApi.get<OrderInterface[]>(`${this.server}:${this.port}/orders`);

  getOrdersDataByDealer = async (dealerId: number): Promise<AxiosResponse<OrderInterface[]>> =>
    storeApi.get<OrderInterface[]>(`${this.server}:${this.port}/orders?${dealerId}`);

  getOrdersDataByCustomer = async (customerId: number): Promise<AxiosResponse<OrderInterface[]>> =>
    storeApi.get<OrderInterface[]>(`${this.server}:${this.port}/customer-orders?${customerId}`);

  createOrder = async (
    payload: any /*: SubmitBodyInterface */,
  ): Promise<AxiosResponse<OrderInterface>> =>
    storeApi.post<OrderInterface>(`${this.server}:${this.port}/orders`, { ...payload });

  deleteOrder = async (id: number): Promise<AxiosResponse> =>
    storeApi.delete(`${this.server}:${this.port}/orders/${id}`, { data: id });

  updateOrder = async (
    id: number,
    payload: OrderInterface,
  ): Promise<AxiosResponse<OrderInterface>> =>
    storeApi.put<OrderInterface>(`${this.server}:${this.port}/orders/${id}`, { ...payload });
}

export const ordersService = new OrdersService(config.SERVER, config.PORT);
