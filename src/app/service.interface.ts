import {Observable} from "rxjs";
import {GameService} from "./game.service";
import {ClientsService} from "./clients.service";

export interface Service{
  url: String
  getAll(): Observable<any>
}
