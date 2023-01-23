import {Rental} from "./rental";
import {Receipt} from "./receipt";

export class Payment {

  id: number;
  paymentMethod: string;
  isInvoice: boolean;
  rental: Rental;
  receipt: Receipt;

  constructor(id: number, paymentMethod: string, isInvoice: boolean, rental: Rental, receipt: Receipt) {
    this.id = id;
    this.paymentMethod = paymentMethod;
    this.isInvoice = isInvoice;
    this.rental = rental;
    this.receipt = receipt;
  }
}
