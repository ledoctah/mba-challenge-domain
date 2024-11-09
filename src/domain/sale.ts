import { randomUUID } from "node:crypto";
import { SaleProduct } from "./sale-product";

interface SellProps {
  createdAt: Date;
  totalPrice: number;
  saleProducts: SaleProduct[];
}

export class Sell {
  id: string;

  createdAt: Date;

  saleProducts: SaleProduct[];

  totalPrice: number;

  constructor(props: SellProps, id?: string) {
    this.createdAt = props.createdAt;
    this.saleProducts = props.saleProducts;
    this.totalPrice = props.totalPrice;

    this.id = id ?? randomUUID();
  }
}