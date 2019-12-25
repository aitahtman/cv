import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
