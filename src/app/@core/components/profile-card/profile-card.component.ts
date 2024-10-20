import {
  DragDropModule,
  CdkDragMove,
  CdkDragEnd,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { IMatchSwipeDetails } from '../../models/common.model';
import { ProfileService } from '../../services/profile.service';
import { ToasterService } from '../../services/toaster.service';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    MatCardModule,
    DragDropModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IonicModule,
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() type: 'Card' | 'Swipe' = 'Card';
  cards: IMatchSwipeDetails[] = [];
  private toaster = inject(ToasterService);
  private router = inject(Router);
  private profileService = inject(ProfileService);

  constructor() {
    this.cards = [...this.profileService.fakeProfiles.slice(0, 4)];
  }

  onDrag(event: CdkDragMove, card: IMatchSwipeDetails): void {
    const { x } = event.pointerPosition;

    if (card.startX === 0) {
      card.startX = x;
    }

    // Calculate swipe depth
    const swipeDepth = x - card.startX;
    const maxRotation = 180; // Maximum rotation in degrees

    // Calculate rotation based on swipe depth
    const rotationFactor = 0.3; // Adjust this factor to control rotation sensitivity
    card.rotation = Math.min(
      maxRotation,
      Math.max(-maxRotation, swipeDepth * rotationFactor)
    );
  }

  onDragEnd(event: CdkDragEnd, index: number, card: IMatchSwipeDetails): void {
    event.event.stopPropagation();
    event.event.preventDefault();
    card.rotation = 0;
    card.startX = 0;
    const { x } = event.distance;

    // If the drag distance is large enough, consider it a swipe
    if (Math.abs(x) > 200) {
      // Mark the card as swiped
      if (x > 0) this.notInterested(card);
      else this.interested(card);
    }
  }

  getCardTop(index: number): string {
    if (index === this.cards.length - 1) {
      return '48px';
    }
    return `${(1 + this.cards.length - index) * 25}px`;
  }

  interested = (card: IMatchSwipeDetails): void => {
    this.profileService.interestedProfile.push(card);
    this.toaster.alert('Interested');
    this.removeProfile(card);
  };

  notInterested = (card: IMatchSwipeDetails): void => {
    this.profileService.notInterestedProfile.push(card);
    this.toaster.alert('Not Interested', 'Error');
    this.removeProfile(card);
  };

  navigateProfile = (card: IMatchSwipeDetails): void => {
    const id = card.id;
    this.router.navigate(['/profile'], { queryParams: { id } });
  };

  shortListed = (card: IMatchSwipeDetails): void => {
    this.profileService.shortListedProfile.push(card);
    card.shortListed = !card.shortListed;
    this.toaster.alert(
      card.shortListed ? 'Shortlisted' : 'Remove from shortlisted',
      'Success'
    );
    // this.removeProfile(card);
  };

  removeProfile = (
    card: IMatchSwipeDetails | null,
    index: number = -1
  ): void => {
    if (card) index = this.cards.findIndex((x) => x.id === card.id);
    this.cards.splice(index, 1);
    this.profileService.fakeProfiles.splice(index, 1);
    if (this.cards.length < this.profileService.fakeProfiles.length) {
      this.cards.push(this.profileService.fakeProfiles[this.cards.length]);
    }
  };
}
