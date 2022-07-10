import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { newsSentimentMock } from '../../mocks/news-sentiment';
import { NewsSentimentService } from '../news-sentiment.service';

describe('NewsSentimentService', () => {
  let service: NewsSentimentService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsSentimentService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() =>
              of({
                data: { feed: newsSentimentMock },
              }),
            ),
          },
        },
      ],
    }).compile();
    service = module.get<NewsSentimentService>(NewsSentimentService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('should find all news sentiment', async () => {
      const newsSentimentFound = await service.findAll({
        function: 'NEWS_SENTIMENT',
        tickers: 'GOOG',
        apikey: '9TVXPG5ISQ47OAVJ',
      });
      expect(newsSentimentFound).toStrictEqual(newsSentimentMock);
    });
  });
});
