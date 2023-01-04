import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { CourseComponent } from './component/course/course.component';
import { FAQsComponent } from './component/faqs/faqs.component';
import { HomeComponent } from './component/home/home.component';
import { PostsComponent } from './component/posts/posts.component';
import { NotFoundComponentComponent } from './shered/not-found-component/not-found-component.component';

const routes: Routes = [
  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'courses',component:CourseComponent},
  {path:'courseDetails/:id',component:CourseDetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'FAQs',component:FAQsComponent},
  {path:'posts',component:PostsComponent},

  {path:'**',component:NotFoundComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



