interface GetStockHistoryMetricUseCaseRequest {
  startDate: Date;
  endDate: Date;
}

export class GetStockHistoryMetricUseCase {
  constructor(
    // private stockOrdersRepository: StockOrdersRepository,
  ) {}

  /**
   * Get stock history metric
   */
  async execute(request: GetStockHistoryMetricUseCaseRequest) {
    throw new Error('Method not implemented');
  }
}