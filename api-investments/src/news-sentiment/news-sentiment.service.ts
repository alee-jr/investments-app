import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { BackendError } from '../utils/backend-error';
import { parseParamsObject } from '../utils/parser';
import { NewsSentimentArgs } from './dto/news-sentiment.args';
import { NewsSentimentType } from './dto/news-sentiment.type';

@Injectable()
export class NewsSentimentService {
  private apiUrl: string;
  private apikey: string;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl = this.configService.get<string>('ALPHA_API_URL');
    this.apikey = this.configService.get<string>('ALPHA_API_KEY');
  }

  async findAll(
    newsSentimentArgs: NewsSentimentArgs,
  ): Promise<NewsSentimentType[]> {
    const args = {
      ...newsSentimentArgs,
      function: 'NEWS_SENTIMENT',
      apikey: this.apikey,
    };
    const parsedParams = parseParamsObject(args);
    const url = `${this.apiUrl}?${parsedParams}`;
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data.feed;
    } catch (error) {
      throw BackendError.fromError(error, url);
    }
  }
}
