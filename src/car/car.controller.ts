import { CarDto } from './car.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public async getCars() {
    const result = await this.carService.getCars();
    return result;
  }

  @Post()
  public async postCar(@Body() car: CarDto) {
    const result = await this.carService.postCar(car);
    return result;
  }

  @Get(':id')
  public async getCarById(@Param('id') id: number) {
    const result = await this.carService.getCarById(id);
    return result;
  }

  @Delete(':id')
  public async deleteCarById(@Param('id') id: number) {
    const result = await this.carService.deleteCarById(id);
    return result;
  }

  @Put(':id')
  public async putCarById(@Param('id') id: number, @Query() query) {
    const propertyName = query.propertyName;
    const propertyValue = query.propertyValue;

    const result = await this.carService.putCarById(
      id,
      propertyName,
      propertyValue,
    );
    return result;
  }
}
