import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatchComponent } from './profile-match.component';

describe('ProfileMatchComponent', () => {
  let component: ProfileMatchComponent;
  let fixture: ComponentFixture<ProfileMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
