import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { dailyMock, dailyMockDTO } from '../../mocks/dailys';
import { DailyService } from '../daily.service';

describe('DailyService', () => {
  let service: DailyService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DailyService,
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
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('should find all dailys', async () => {
      const dailyfound = await service.findAll({
        symbol: 'GOOG',
      });
      expect(dailyfound).toStrictEqual(dailyMockDTO);
    });
  });
});
