import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
