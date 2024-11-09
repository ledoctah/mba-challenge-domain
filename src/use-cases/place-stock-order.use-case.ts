interface PlaceStockOrderUseCaseRequest {
  stockId: string;
  amountId: string;
  supplierId: string;
}

export class PlaceStockOrderUseCase {
  constructor(
    // private suppliersRepository: SuppliersRepository,
    // private stocksRepository: StocksRepository,
    // private stockOrdersRepository: StockOrdersRepository,
  ) {}

  /**
   * Place stock order to a supplier
   */
  async execute(request: PlaceStockOrderUseCaseRequest) {
    throw new Error('Method not implemented');
  }
}