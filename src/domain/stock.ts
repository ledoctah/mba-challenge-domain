import { randomUUID } from "node:crypto";

interface StockProps {
  productId: string;
  stockQuantity: number;
  minimumStockQuantity: number;
}

export class Stock {
  id: string;

  productId: string;

  stockQuantity: number;

  minimumStockQuantity: number;

  constructor(props: StockProps, id?: string) {
    this.stockQuantity = props.stockQuantity;
    this.productId = props.productId;
    this.minimumStockQuantity = props.minimumStockQuantity;

    this.id = id ?? randomUUID();
  }
}