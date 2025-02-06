import { Component } from '@angular/core';
import { PlayerListComponent } from '../player-list/player-list.component';

@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html',
  styleUrls: ['./host-game.component.css'],
  imports: [PlayerListComponent],
})
export class HostGameComponent {
  gameCode: string = 'ABCD1234'; // Placeholder code
  players: string[] = []; // List of player names

  startGame() {
    console.log('Game Started!');
  }

  endGame() {
    console.log('Game Ended!');
  }
}
