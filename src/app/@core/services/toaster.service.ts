import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToasterService {
  private _snackBar = inject(MatSnackBar);
  alert = (
    message: string,
    type: 'Success' | 'Error' | 'Warning' = 'Success',
    duration = 2000
  ): void => {
    this._snackBar.open(message, '', {
      duration,
    });
  };
}
