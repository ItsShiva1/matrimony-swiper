import { Injectable } from '@angular/core';
import { IMatchSwipeDetails } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  fakeProfiles: IMatchSwipeDetails[] = [];
  shortListedProfile: IMatchSwipeDetails[] = [];
  interestedProfile: IMatchSwipeDetails[] = [];
  notInterestedProfile: IMatchSwipeDetails[] = [];
  constructor() {
    this.setProfiles();
  }

  getProfileById = (id: number): IMatchSwipeDetails | null => {
    return this.fakeProfiles.find((x) => x.id === id)!;
  };

  setProfiles = (): void => {
    this.fakeProfiles = [
      {
        id: 1,
        name: 'Ananya',
        age: 24,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 6 in',
        professional: 'Doctor',
        grade: 'MBBS',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/ananya.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 2,
        name: 'Priya',
        age: 26,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 4 in',
        professional: 'Teacher',
        grade: 'B.Ed',
        city: 'Coimbatore',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/priya.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 3,
        name: 'Lakshmi',
        age: 22,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 5 in',
        professional: 'Software Engineer',
        grade: 'B.Tech',
        city: 'Madurai',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/lakshmi.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 4,
        name: 'Sowmya',
        age: 29,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 7 in',
        professional: 'Not Working',
        grade: 'MBBS',
        city: 'Tiruchirappalli',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/sowmya.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 5,
        name: 'Meera',
        age: 25,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 3 in',
        professional: 'Professor',
        grade: 'M.Phil',
        city: 'Salem',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/meera.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 6,
        name: 'Ayat',
        age: 23,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 6 in',
        professional: 'Doctor',
        grade: 'MBBS',
        city: 'Erode',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/divya.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 7,
        name: 'Vani',
        age: 28,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 8 in',
        professional: 'Doctor',
        grade: 'MBBS',
        city: 'Tirunelveli',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/vani.jpg',
        rotation: 0,
        startX: 0,
      },
      {
        id: 8,
        name: 'Nisha',
        age: 27,
        motherTongue: 'Tamil',
        knowLangues: ['Tamil', 'English'],
        caste: 'Cast No Bar',
        height: '5 ft 5 in',
        professional: 'Doctor',
        grade: 'MBBS',
        city: 'Vellore',
        state: 'Tamil Nadu',
        country: 'India',
        imageUrl: 'https://example.com/images/nisha.jpg',
        rotation: 0,
        startX: 0,
      },
      //   {
      //     id: 9,
      //     name: 'Kavya',
      //     age: 29,
      //   motherTongue: 'Tamil',
      //     knowLangues: ['Tamil', 'English'],
      //     caste: 'Cast No Bar',
      //     height: '5 ft 9 in',
      //     city: 'Thanjavur',
      // professional: 'Doctor',
      //     grade: 'MBBS',
      //     state: 'Tamil Nadu',
      //     country: 'India',
      //     imageUrl: 'https://example.com/images/kavya.jpg',
      //     rotation: 0,
      //     startX: 0,
      //   },
      //   {
      //     id: 10,
      //     name: 'Janifer',
      //     age: 24,
      //   motherTongue: 'Tamil',
      //     knowLangues: ['Tamil', 'English'],
      //     caste: 'Cast No Bar',
      //     height: '5 ft 4 in',
      // professional: 'Doctor',
      //     grade: 'MBBS',
      //     city: 'Kanyakumari',
      //     state: 'Tamil Nadu',
      //     country: 'India',
      //     imageUrl: 'https://example.com/images/aruna.jpg',
      //     rotation: 0,
      //     startX: 0,
      //   },
    ];
  };
}
