import {Client} from "./model/client";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Rental} from "./model/rental";
import {Reservation} from "./model/reservation";
import {ClientToAdd} from "./model/clientToAdd";

@Injectable()
export class ClientsService{
  url = "http://localhost:8080/clients"
  clients: Client[] = [];
  selectedClient : Client
  add: boolean;

  constructor(private http: HttpClient) {
    this.getAllClients()
      .subscribe(
        (data) => {
          this.clients = data;
          console.log(data)
        }
      )
  }



  getAllClients(){
    return this.http.get<Client[]>(this.url)
  }
  getClientById(id: number){
    return this.http.get<Client>(this.url+ "/" + id)
  }

  getRentals(){
    return this.http.get<[][]>(this.url+"/rentals")
  }

  getRentalsForClient(id: number){
    return this.http.get<Rental[]>(this.url+ "/rentals/" + id)
  }

  getReservationsForClient(id: number){
    return this.http.get<Reservation[]>(this.url + "/reservations/"+ id)
  }
  editClient(client: Client){
    console.log("client edited")
    return this.http.put<Client>(this.url, client)
      .subscribe()
  }
  addClient(client: Client){
    return this.http.post<Client>(this.url, client)
      .subscribe()
  }

  sendDeleteRequest(client: Client){
    return this.http.delete<boolean>(this.url, {body: client})
  }

  deleteClient(client: Client){
    let deleted = false;
    this.sendDeleteRequest(client)
      .subscribe((response) => {
          deleted = response;
        })
    return deleted;

    }

}
