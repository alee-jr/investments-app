import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { BackendError } from '../utils/backend-error';
import { parseParamsObject } from '../utils/parser';
import { NewsSentimentArgs } from './dto/news-sentiment.args';
import { NewsSentimentType } from './dto/news-sentiment.type';

@Injectable()
export class NewsSentimentService {
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
