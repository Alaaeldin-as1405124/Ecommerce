import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) {}

  showToast(message:string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration:2000,
    });
  }
}
