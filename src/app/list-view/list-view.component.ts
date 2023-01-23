import { Component } from '@angular/core';
import {GameService} from "../game.service";
import {Game} from "../model/game";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  games: Game[]
  isDataLoaded = false;
  constructor(private gameService: GameService,
              private router: Router) {
    gameService.getAllGames()
      .subscribe(
        (data) => {
          this.games = data
          this.gameService.games = data;
          this.isDataLoaded = true;
        }
      )
  }

  onClick(id: number){
    this.router.navigate(["games/"+id])
  }

}
