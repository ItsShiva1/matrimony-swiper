export interface IProfileDetails {
  id: number;
  name: string;
  age: number;
  motherTongue: string;
  knowLangues: string[];
  caste: string;
  height: string;
  professional: string;
  grade: string;
  city: string;
  state: string;
  country: string;
  imageUrl?: string;
  shortListed?: boolean;
}

export interface IMatchSwipeDetails extends IProfileDetails {
  rotation: number;
  startX: number;
}
