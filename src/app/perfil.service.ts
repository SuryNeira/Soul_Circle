import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userProfileData: any;

  setPerfil(data: any) {
    this.userProfileData = data;
  }

  getperfil() {
    return this.userProfileData;
  }
}
