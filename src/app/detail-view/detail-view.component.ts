import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../model/game";
import {GameService} from "../game.service";
import {ClientsService} from "../clients.service";
import {Client} from "../model/client";
import {Rental} from "../model/rental";
import * as Path from "path";
import {Unary} from "@angular/compiler";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  game: Game;
  //only for test purposes
  client: Client;
  tooManyGames: boolean;
  canRent = false;
  msg : string;
  isDataLoaded = false;
  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private clientService: ClientsService,
              private router: Router) {
    this.gameService.getGameById(this.route.snapshot.params["id"])
      .subscribe(
        (data) =>{
          this.game = data;
          this.isDataLoaded = true;
          console.log(this.game)
          console.log(this.game._rented || this.game._reserved)
        });
    this.clientService.getClientById(54)
      .subscribe(
        (data) => {
          this.client = data;
          //this.client.isOnBlacklist = true;
          this.gameService.canRent(this.client)
            .subscribe(
              (data) => {
                this.tooManyGames = data;
              }
            )

        }
      )
    //for test purposes
  }

  onRent(){
    if(this.client.isOnBlacklist){
      this.msg = "Nie możesz wypożyczyć pozycji, znajdujesz się na czarnej liście!"
    }
    else if(!this.tooManyGames){
      this.msg = "Nie możesz wypożyczyć pozycji, wypożyczyłeś limit pozycji.";
    }
    else {
      this.msg = "Czy na pewno chcesz wypożyczyć pozycję " + this.game.title + " ?"
      this.canRent = true;
    }
  }

  onLeave(){
    if(this.canRent){
      var date = new Date()
      var date1 = new Date()
      this.game._rented = true;
      this.gameService.rentGame(new Rental(date, new Date(date1.setDate(date1.getDate() + 30)),this.game.value, 0,0,false,this.client,this.game));
      console.log(date);
      this.router.navigate(["./gamedetail/" + this.game.id])
    }
    else {
      this.router.navigate(["games"]);

    }
  }

  onReturn(){
    this.router.navigate(["games"]);
  }

}
