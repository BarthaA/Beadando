import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  createOrder(orderData: CreateOrderDto) {
    const { expirationDate } = orderData;
    const [month, year] = expirationDate.split('/').map(Number);

    const now = new Date();
    const currentYear = Number(now.getFullYear().toString().slice(-2));
    const currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      throw new Error('The expiration date is in the past');
    }

    return { success: true };
  }
}
