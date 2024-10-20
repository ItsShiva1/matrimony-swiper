import { Component } from '@angular/core';
import { ProfileCardComponent } from '../@core/components/profile-card/profile-card.component';

@Component({
  selector: 'app-profile-match',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './profile-match.component.html',
  styleUrl: './profile-match.component.scss',
})
export class ProfileMatchComponent {}
