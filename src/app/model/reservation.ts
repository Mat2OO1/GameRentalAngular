import {Game} from "./game";
import {Client} from "./client";

export class Reservation{
  id: number;
  startDate: Date;
  endDate: Date;
  client: Client;
  game: Game;

  constructor(id: number, startDate: Date, endDate: Date, client: Client, game: Game) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.client = client;
    this.game = game;
  }
}
