import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

// Project imports
import { ProjectCheskersComponent } from './components/projects/cheskers/cheskers.component';
import { ProjectLambdaApiComponent } from './components/projects/lambda-api/lambda-api.component';
import { ProjectPortfolioComponent } from './components/projects/portfolio/portfolio.component';
import { ProjectSaplynComponent } from './components/projects/saplyn/saplyn.component';
import { ProjectTasterlyComponent } from './components/projects/tasterly/tasterly.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ProjectCheskersComponent,
    ProjectLambdaApiComponent,
    ProjectPortfolioComponent,
    ProjectSaplynComponent,
    ProjectTasterlyComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
