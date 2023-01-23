import {Injectable} from "@angular/core";
import {Client} from "./model/client";
import {HttpClient} from "@angular/common/http";
import {Game} from "./model/game";
import {Rental} from "./model/rental";

@Injectable()
export class GameService{
  url = "http://localhost:8080/games"
  games: Game[] = [];
  rental: Rental;

  constructor(private http: HttpClient) {
    this.getAllGames()
      .subscribe(
        (data) => {
          this.games = data;
          console.log(data)
        }
      )
  }

  getAllGames(){
    return this.http.get<Game[]>(this.url)
  }

  getGameById(id: number){
    return this.http.get<Game>(this.url+ "/"+id)
  }

  canRent(client: Client){
    return this.http.get<boolean>("http://localhost:8080/clients/canRent/" + client.id)
  }
  lateRentals(client: Client){
    return this.http.get<boolean>("http://localhost:8080/clients/lateRentals/" + client.id)
  }

  rentGame(rental: Rental){
    this.rental = rental;
    return this.http.post("http://localhost:8080/rentals"+"/add", rental)
      .subscribe()
  }
}
