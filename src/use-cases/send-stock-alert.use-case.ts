interface SendStockAlertUseCaseRequest {
  productId: string;
}

export class SendStockAlertUseCase {
  constructor(
    // private alertProvider: AlertProvider,
    // private productsRepository: ProductsRepository,
  ) {}

  /**
   * Send a alert when a product is running out of stock
   */
  async execute(request: SendStockAlertUseCaseRequest) {
    throw new Error('Method not implemented');
  }
}