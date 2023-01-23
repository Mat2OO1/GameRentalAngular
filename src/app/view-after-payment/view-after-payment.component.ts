import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../model/game";
import {GameService} from "../game.service";
import {Rental} from "../model/rental";

@Component({
  selector: 'app-view-after-payment',
  templateUrl: './view-after-payment.component.html',
  styleUrls: ['./view-after-payment.component.css']
})
export class ViewAfterPaymentComponent {
  game: Game
  isDataLoaded = false;
  rental: Rental;
  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router) {
    this.gameService.getGameById(route.snapshot.params["id"])
      .subscribe(
        (data) => {
          this.game = data;
          this.isDataLoaded = true;
        }
      )
    this.rental = this.gameService.rental;
  }

  onLeave(){
    this.router.navigate(["games"])
  }

}
