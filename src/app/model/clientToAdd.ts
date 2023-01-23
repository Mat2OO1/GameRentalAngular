import {Account} from "./account";
import {AccountToAdd} from "./accountToAdd";

export class ClientToAdd {
  private name: string;
  private surname: string;
  private phone_number: string;
  private birthdate: Date;
  private isOnBlacklist: boolean;
  private account: AccountToAdd;


  constructor(name: string, surname: string, phone_number: string, birthdate: Date, isOnBlacklist: boolean, account: AccountToAdd) {
    this.name = name;
    this.surname = surname;
    this.phone_number = phone_number;
    this.birthdate = birthdate;
    this.isOnBlacklist = isOnBlacklist;
    this.account = account;
  }
}
