import { Component } from '@angular/core';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent {
  gameCode: string = '';
  playerName: string = '';

  joinGame() {
    console.log(`Joining game ${this.gameCode} as ${this.playerName}`);
    // Logic to join the game
  }
}
