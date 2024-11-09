interface GetSalesInPeriodMetricUseCaseRequest {
  startDate: Date;
  endDate: Date;
}

export class GetSalesInPeriodMetricUseCase {
  constructor(
    // private salesRepository: SalesRepository,
  ) {}

  /**
   * Get sales in period history metric
   */
  async execute(request: GetSalesInPeriodMetricUseCaseRequest) {
    throw new Error('Method not implemented');
  }
}