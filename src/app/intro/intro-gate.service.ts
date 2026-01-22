import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntroGateService {
  private played = false;

  hasPlayed(): boolean {
    return this.played;
  }

  markPlayed(): void {
    this.played = true;
  }
}
