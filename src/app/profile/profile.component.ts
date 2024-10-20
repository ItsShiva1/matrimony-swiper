import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IProfileDetails } from '../@core/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../@core/services/profile.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profile: IProfileDetails | null = null;
  private profileService = inject(ProfileService);
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.profile = this.profileService.getProfileById(+id!);
  }

  back = () => {
    this.router.navigate(['profile-match']);
  };
}
