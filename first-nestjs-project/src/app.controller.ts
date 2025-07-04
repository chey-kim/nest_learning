import {Controller, Get, Post, Put} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    postHello(): string {
        return this.appService.getHello();
    }

    @Put()
    putHello(): string {
        return this.appService.getHello();
    }

    @Delete()
    deleteHello(): string {
        return this.appService.getHello();
    }
}
