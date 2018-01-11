/**
 * Route definitions for the frontend.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { ContactComponent } from './../components/contact/contact.component';
import { PortfolioComponent } from './../components/portfolio/portfolio.component';
import { ProjectPortfolioComponent } from './../components/projects/portfolio/portfolio.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/portfolio', component: ProjectPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
