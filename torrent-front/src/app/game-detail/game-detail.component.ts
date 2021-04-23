import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  public game: Game | undefined
  public reqs = []
  public comments = []

  
  public titles = ["OS", "Processor", "Video Card", "Memory Storage"]

  commentData = {
    username: '',
    text: '',
    game: ''
  }

  constructor(private route: ActivatedRoute,
    private gameService:GameService,
    private location:Location) { }

  ngOnInit(): void {
    this.getGame();

  }
  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }

  goBack(): void {
    this.location.back();
  }
}
