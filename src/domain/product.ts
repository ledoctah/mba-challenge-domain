import { randomUUID } from "node:crypto";

interface ProductProps {
  size: string;
  color: string;
}

export class Product {
  id: string;

  size: string;

  color: string;

  constructor(props: ProductProps, id?: string) {
    this.size = props.size;
    this.color = props.color;

    this.id = id ?? randomUUID();
  }
}