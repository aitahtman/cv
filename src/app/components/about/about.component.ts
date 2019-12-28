import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public store: StoreService) {
    console.log(this.store.cvData)
  }

  ngOnInit() {

  }

}
