import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { StoreService } from "../../services/store.service";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  constructor(
    library: FaIconLibrary, 
    faConfig: FaConfig,
    public store: StoreService
  ) {
    library.addIconPacks(fas, far, fab);
    faConfig.defaultPrefix = 'far';
  }

  ngOnInit() {
  }

}
