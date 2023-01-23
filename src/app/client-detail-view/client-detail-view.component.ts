import {Component, Input} from '@angular/core';
import {Client} from "../model/client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../clients.service";
import {DatePipe} from "@angular/common";
import {Rental} from "../model/rental";
import {Reservation} from "../model/reservation";

@Component({
  selector: 'app-client-detail-view',
  templateUrl: './client-detail-view.component.html',
  styleUrls: ['./client-detail-view.component.css'],
  providers: [
    DatePipe
  ]
})
export class ClientDetailViewComponent {
  client: Client;
  rentals: Rental[] = [];
  deleted: boolean
  reservations: Reservation[] = [];
  constructor(private route: ActivatedRoute,
              private clientService: ClientsService,
              private router: Router) {
    this.client = this.clientService.selectedClient
    this.clientService.getClientById(this.route.snapshot.params["id"])
      .subscribe(
        (data) => {
          this.client = data;
        }
      );
    this.clientService.getRentalsForClient(this.client.id).subscribe(
      (data) => {
        this.rentals = data;
      }
    )
    this.clientService.getReservationsForClient(this.client.id).subscribe(
      (data) => {
        this.reservations = data;
      }
    );
  }

  onDelete(){
    this.clientService.sendDeleteRequest(this.client)
      .subscribe(
        (data) => {
          this.deleted = data;
        }
      )
  }

  redirect(){
    this.router.navigate(['clients']);
  }

  onEditClick(){
    this.clientService.add = false;
    this.router.navigate(["/clients/"+this.client.id+"/add"])
  }


}
