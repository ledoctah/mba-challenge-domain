import { randomUUID } from "node:crypto";

interface SaleProductProps {
  saleId: string;
  productId: string;
  price: number;
  amount: number;
}

export class SaleProduct {
  id: string;

  productId: string;

  saleId: string;

  price: number;

  amount: number;

  constructor(props: SaleProductProps, id?: string) {
    this.productId = props.productId;
    this.saleId = props.saleId;
    this.price = props.price;
    this.amount = props.amount;

    this.id = id ?? randomUUID();
  }
}