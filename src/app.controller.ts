import * as next from 'next';
import {
  Get,
  Post,
  Controller,
  UseGuards,
  Response,
  Request,
  Next,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { nextHandler } from 'main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  root(
    @Request() req: Request,
    @Response() res: Response,
    @Next() next: Function,
  ): Function {
    if (/api/.test(req.url)) return next();
    return nextHandler(req, res);
  }
}
