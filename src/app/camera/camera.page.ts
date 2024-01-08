import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  public cameraImageUri: string | undefined;

  constructor() { }

  
  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      this.cameraImageUri = image.webPath;
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }
}
