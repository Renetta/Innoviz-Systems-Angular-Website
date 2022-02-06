import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home"},
  { path: "home", component: HomeComponent},
  { path: "our-company", component: AboutComponent},
  { path: "services", component: ServicesComponent},
  { path: 'services/:name', component: ServiceDetailsComponent},
  { path: "careers", component: CareersComponent},
  { path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
