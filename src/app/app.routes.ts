import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

   { path : '', component: HomeComponent},     // redirection to home component 
   { path : 'about', component: AboutComponent},
   { path : 'skills', component: SkillsComponent},
   { path : 'projects', component: ProjectsComponent},
   { path : 'contact', component: ContactComponent},
   { path : '**', redirectTo : '' , pathMatch: 'full'}                    //last one is always a wild card route.

];

@NgModule({
   imports : [RouterModule.forRoot(routes)],
   exports : [RouterModule]
})

export class AppRoutingModule { }
