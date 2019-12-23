import { Component, OnInit } from '@angular/core';
import persoData from '../../../assets/data/perso.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  resumeData;

  constructor() { 
    this.resumeData = persoData;
  }

  ngOnInit() {
    
  }

}
