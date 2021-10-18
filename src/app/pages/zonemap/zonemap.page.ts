import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zonemap',
  templateUrl: './zonemap.page.html',
  styleUrls: ['./zonemap.page.scss'],
})
export class ZonemapPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/loginform'])
  }

}
