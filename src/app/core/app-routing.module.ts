/**
 * Route definitions for the frontend.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { ContactComponent } from './../components/contact/contact.component';
import { PortfolioComponent } from './../components/portfolio/portfolio.component';
import { ProjectCheskersComponent } from './../components/projects/cheskers/cheskers.component';
import { ProjectLambdaApiComponent } from './../components/projects/lambda-api/lambda-api.component';
import { ProjectPortfolioComponent } from './../components/projects/portfolio/portfolio.component';
import { ProjectSaplynComponent } from './../components/projects/saplyn/saplyn.component';
import { ProjectTasterlyComponent } from './../components/projects/tasterly/tasterly.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/cheskers', component: ProjectCheskersComponent },
  { path: 'project/lambda-api', component: ProjectLambdaApiComponent },
  { path: 'project/portfolio', component: ProjectPortfolioComponent },
  { path: 'project/saplyn', component: ProjectSaplynComponent },
  { path: 'project/tasterly', component: ProjectTasterlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
