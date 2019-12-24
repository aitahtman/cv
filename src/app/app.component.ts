import { Component, HostListener } from '@angular/core';
import persoData from '../assets/data/perso.json';
import { StoreService } from "./services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-app';
  openedSidenav = false;
  constructor(public store: StoreService) {
    this.store.cvData = persoData;
  }

  ngOnInit(e) {
    this.onResize(e);
  }

  @HostListener('window:resize')
  onResize(event) {
    let width;

    if (event != undefined) {
      width = event.target.innerWidth;
    }
    else {
      width = document.body.clientWidth;
    }
    console.log(width)
    if (width >= 720) {
      this.openedSidenav = true;
    }
    else {
      this.openedSidenav = false;
    }

  }
}

