import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { BackendError } from '../utils/backend-error';
import { parseParamsObject } from '../utils/parser';
import { convertDailyResponse } from './converters/daily.converter';
import { DailyArgs } from './dto/daily.args';
import { DailyType } from './dto/daily.type';

@Injectable()
export class DailyService {
  private apiUrl: string;
  private apikey: string;

  constructor(private readonly httpService: HttpService) {
    this.apiUrl = process.env.ALPHA_API_URL;
    this.apikey = process.env.ALPHA_API_KEY;

    if (!this.apikey) {
      this.apikey = '9TVXPG5ISQ47OAVJ';
    }

    if (!this.apiUrl) {
      this.apiUrl = 'https://www.alphavantage.co/query';
    }
  }

  async findAll(dailyArgs: DailyArgs): Promise<DailyType[]> {
    const args = {
      ...dailyArgs,
      function: 'TIME_SERIES_DAILY',
      apikey: this.apikey,
    };
    const parsedParams = parseParamsObject(args);
    const url = `${this.apiUrl}?${parsedParams}`;
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      const converterResponse = convertDailyResponse(response.data);
      return converterResponse;
    } catch (error) {
      throw BackendError.fromError(error, url);
    }
  }
}
