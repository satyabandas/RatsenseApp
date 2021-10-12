import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
  private selectedSegment: string = 'map'
  //segmentModel = "map";

  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() { 
    
  }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(-37.820148, 145.0358);
    const options = {
      center: location,
      zoom: 15,
      fullscreenControl: false,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selectedSegment=ev.target.value
    //this.showMap();
  }

}
