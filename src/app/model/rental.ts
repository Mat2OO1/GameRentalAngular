import {Client} from "./client";
import {Game} from "./game";
import {Reservation} from "./reservation";
import {Payment} from "./payment";

export class Rental {
  rentalDate: Date;
  returnDate: Date;
  cost: number;
  penalty: number;
  discount: number;
  isPaid: boolean;
  client: Client;
  game: Game;


  constructor(rentalDate: Date, returnDate: Date, cost: number, penalty: number, discount: number, isPaid: boolean, client: Client, game: Game) {
    this.rentalDate = rentalDate;
    this.returnDate = returnDate;
    this.cost = cost;
    this.penalty = penalty;
    this.discount = discount;
    this.isPaid = isPaid;
    this.client = client;
    this.game = game;
  }
}
