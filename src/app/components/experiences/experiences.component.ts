import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
