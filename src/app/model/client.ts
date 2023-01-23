import {Account} from "./account";

export class Client {
  id: number;
  name : string;
  surname : string;
  phone_number: string;
  birthdate : Date;
  isOnBlacklist: boolean;
  account: Account;


  constructor(id: number, name: string, surname: string, phone_number: string, birthdate: Date, isOnBlacklist: boolean, account: Account) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone_number = phone_number;
    this.birthdate = birthdate;
    this.isOnBlacklist = isOnBlacklist;
    this.account = account;
  }


}
