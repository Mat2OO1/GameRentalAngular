import {Component, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Client} from "../model/client";
import {ClientsService} from "../clients.service";
import {ClientRentals} from "../model/clientRentals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-list-view',
  templateUrl: './client-list-view.component.html',
  styleUrls: ['./client-list-view.component.css']
})
export class ClientListViewComponent implements OnChanges, OnInit {
  clients: Client[] = [];
  numOfRentals: [][] = []

  constructor(private clientsService: ClientsService,
              private router: Router) {
    this.clientsService.getRentals()
      .subscribe(
        (data) => {
          this.numOfRentals = data
          console.log(data);
        }
      )

  }

  ngOnInit(): void {
    this.clientsService.getAllClients()
      .subscribe(
        (data) => {
          this.clients = data;
        }
      )
    }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  getNumberOfRentals(id: number) {
    return this.numOfRentals.filter(elem => elem.at(0) === id)[0].at(1)
  }

  onClick(client: Client) {
    this.clientsService.selectedClient = client;
    this.clientsService.add = true;
    this.router.navigate(["clients/" + client.id])
  }

  onAddClient(){
    this.clientsService.add = true;
    this.router.navigate(["/clients/add"])
  }

}
