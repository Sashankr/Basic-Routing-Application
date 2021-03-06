import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path : 'home' , component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'services', component : ServicesComponent },
  {path : 'overview', component : OverviewComponent },
  {path : 'profile',component : ProfileComponent},
  {path : 'contact', component : ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent, ServicesComponent, OverviewComponent, ProfileComponent, ContactComponent];
