import { Component, OnInit } from '@angular/core';

import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

  showAlert() {
    this.alertController.create({
      cssClass: 'cust-alert',
      header: '',
      subHeader: '',
      message: 'Thank you for submitting your Feedback.',
      buttons: ['OK']
    }).then(res => {
      res.present();

    });

  }

  openCamera (){
    this.alertController.create({
      cssClass: 'cust-alert',
      header: '',
      subHeader: '',
      message: 'Opening Camera........',
      buttons: ['OK']
    }).then(res => {
      res.present();

    });
  }

}
