import { randomUUID } from "node:crypto";

interface SupplierProps {
  createdAt: Date;
  supplierId: number;
  stockId: number;
  amount: number;
  deliverEstimatedAt: Date;
}

export class Supplier {
  id: string;

  createdAt: Date;

  stockId: number;

  amount: number;

  deliverEstimatedAt: Date;

  constructor(props: SupplierProps, id?: string) {
    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt;
    this.deliverEstimatedAt = props.deliverEstimatedAt;
    this.stockId = props.stockId;
    this.amount = props.amount;
  }
}