import { randomUUID } from "node:crypto";

interface SupplierProps {
  name: string;
}

export class Supplier {
  id: string;

  name: string;

  constructor(props: SupplierProps, id?: string) {
    this.id = id ?? randomUUID();
    this.name = props.name;
  }
}