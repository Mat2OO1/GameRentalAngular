export class Receipt{
  id: number;
  NIP: number;
  DateOfPayment: Date;

  constructor(id: number, NIP: number, DateOfPayment: Date) {
    this.id = id;
    this.NIP = NIP;
    this.DateOfPayment = DateOfPayment;
  }
}
