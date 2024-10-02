import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      const result = this.orderService.createOrder(createOrderDto);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
