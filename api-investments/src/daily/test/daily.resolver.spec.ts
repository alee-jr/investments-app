import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { dailyMock, dailyMockDTO } from '../../mocks/dailys';
import { DailyResolver } from '../daily.resolver';
import { DailyService } from '../daily.service';

describe('DailyResolver', () => {
  let service: DailyService;
  let resolver: DailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DailyService,
        DailyResolver,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() =>
              of({
                data: dailyMock,
              }),
            ),
          },
        },
      ],
    }).compile();
    service = module.get<DailyService>(DailyService);
    resolver = new DailyResolver(service);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  describe('daily', () => {
    it('should find all dailys', async () => {
      const dailyfound = await resolver.daily({
        symbol: 'GOOG',
      });
      expect(dailyfound).toStrictEqual(dailyMockDTO);
    });
  });
});
