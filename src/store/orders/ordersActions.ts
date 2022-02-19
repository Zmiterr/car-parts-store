import { Dispatch } from 'redux';
import { OrderInterface, OrdersActionsType } from './types';
import { ordersService } from '../../api/OrdersService';
import { sortArrayAscend } from '../../shared/utils/sortArrayAscend';
import { SubmitOrdersBodyInterface } from '../../pages/OrderConfirm/OrderConfirm';

interface GetOrderPropsInterface {
  id?: number;
  category?: string;
}

const ordersLoaded = (data: OrderInterface[]) => ({
  type: OrdersActionsType.GET_ORDERS,
  payload: data,
});

const ordersError = () => ({
  type: OrdersActionsType.FETCH_ORDERS_ERROR,
});

const getOrders =
  (id?: number, category?: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    /* switch (category) {
      case 'dealer':
        await ordersService.getOrdersDataByDealer(id);
        break;
      case 'customer':
        await ordersService.getOrdersDataByCustomer(id);
        break;
      default:
        await ordersService.getOrdersData();
    } */
    const { data } = await ordersService.getOrdersData();
    if (data) {
      data.sort((a, b) => sortArrayAscend(a.id, b.id));
      dispatch(ordersLoaded(data));
    } else {
      dispatch(ordersError());
    }
  };

const removeOrder =
  (id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { status } = await ordersService.deleteOrder(id);
    if (status === 200) {
      dispatch<any>(getOrders());
    } else {
      dispatch(ordersError());
    }
  };

const updateOrder =
  (id: number, body: OrderInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await ordersService.updateOrder(id, body);
    if (data) {
      // TODO find type for action
      dispatch<any>(getOrders());
    } else {
      dispatch(ordersError());
    }
  };

const createOrder =
  (payload: SubmitOrdersBodyInterface) =>
  async (dispatch: Dispatch): Promise<void> => {
    const { data } = await ordersService.createOrder(payload);
    if (data) {
      dispatch<any>(getOrders(payload.customerId, 'customer'));
    } else {
      dispatch(ordersError());
    }
  };

export { getOrders, removeOrder, updateOrder, createOrder };
